<?php
// =================== LLM KEYS endpoints ===================

function route_llm_keys_list(): void {
    require_admin();
    $reveal = ($_GET['reveal'] ?? '0') === '1' || ($_GET['reveal'] ?? '') === 'true';
    $rows = db()->query('SELECT * FROM llm_keys ORDER BY provider ASC')->fetchAll();
    foreach ($rows as &$r) {
        $r['is_active'] = (bool)$r['is_active'];
        $r['balance']   = (float)$r['balance'];
        if (!$reveal) $r['api_key'] = mask_key((string)$r['api_key']);
    }
    send_json(['items' => $rows]);
}

function route_llm_keys_create(): void {
    require_admin();
    $b = get_json_body();
    if (empty($b['provider']) || empty($b['label'])) send_error('provider and label are required', 400);
    $apiKey = trim((string)($b['api_key'] ?? ''));
    if ($apiKey === '') send_error('api_key is required — paste the actual provider key', 400);
    if (strpos($apiKey, '****') !== false) send_error('You pasted the masked value, not the real key. Click "Reveal Keys" first, then copy.', 400);
    $id = uuid();
    $stmt = db()->prepare('INSERT INTO llm_keys (id, provider, label, api_key, model, base_url, balance, is_active, notes) VALUES (?,?,?,?,?,?,?,?,?)');
    $stmt->execute([
        $id,
        $b['provider'],
        $b['label'],
        $apiKey,
        $b['model'] ?? null,
        $b['base_url'] ?? null,
        isset($b['balance']) ? (float)$b['balance'] : 0,
        !empty($b['is_active']) ? 1 : 0,
        $b['notes'] ?? null,
    ]);
    $get = db()->prepare('SELECT * FROM llm_keys WHERE id = ?');
    $get->execute([$id]);
    send_json($get->fetch());
}

function route_llm_keys_update(string $id): void {
    require_admin();
    $b = get_json_body();
    $allowed = ['provider', 'label', 'api_key', 'model', 'base_url', 'balance', 'is_active', 'notes'];
    $sets = []; $vals = [];
    foreach ($allowed as $k) {
        if (!array_key_exists($k, $b) || $b[$k] === null) continue;
        if ($k === 'api_key') {
            $newKey = trim((string)$b[$k]);
            // Skip empty (don't wipe the old value)
            if ($newKey === '') continue;
            // Skip masked values like "sk-p******-LkA" (frontend sent back the masked display)
            if (strpos($newKey, '****') !== false || strpos($newKey, '••••') !== false) continue;
            $val = $newKey;
        } else {
            $val = $b[$k];
        }
        if ($k === 'is_active') $val = bool_field($val) ? 1 : 0;
        if ($k === 'balance')   $val = (float)$val;
        $sets[] = "`$k` = ?";
        $vals[] = $val;
    }
    if (!$sets) send_json(['ok' => true, 'updated_fields' => []]);
    $sets[] = 'updated_at = NOW()';
    $vals[] = $id;
    $stmt = db()->prepare('UPDATE llm_keys SET ' . implode(', ', $sets) . ' WHERE id = ?');
    $stmt->execute($vals);
    if ($stmt->rowCount() === 0) {
        $chk = db()->prepare('SELECT id FROM llm_keys WHERE id = ?'); $chk->execute([$id]);
        if (!$chk->fetch()) send_error('Not found', 404);
    }
    // Diagnostic: report which fields were actually applied, so the UI can confirm api_key was saved.
    $updated = array_map(fn($s) => trim(explode('=', $s)[0], '` '), $sets);
    send_json(['ok' => true, 'updated_fields' => array_values(array_diff($updated, ['updated_at']))]);
}

function route_llm_keys_delete(string $id): void {
    require_admin();
    $stmt = db()->prepare('DELETE FROM llm_keys WHERE id = ?');
    $stmt->execute([$id]);
    send_json(['deleted' => $stmt->rowCount()]);
}

function route_llm_keys_test(string $id): void {
    require_admin();
    $stmt = db()->prepare('SELECT * FROM llm_keys WHERE id = ?');
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    if (!$row) send_error('Not found', 404);
    $key = trim((string)($row['api_key'] ?? ''));
    if ($key === '') {
        send_json([
            'ok' => false,
            'provider' => $row['provider'],
            'model' => $row['model'],
            'has_api_key' => false,
            'message' => 'API key is empty',
        ], 400);
    }
    if (str_starts_with($key, 'sk-emergent-')) {
        send_json([
            'ok' => false,
            'provider' => $row['provider'],
            'model' => $row['model'],
            'has_api_key' => true,
            'message' => 'Emergent Universal Keys work in the Emergent preview only. Use a real OpenAI key for Hostinger PHP.',
        ], 422);
    }

    // OpenAI's models endpoint validates a key without generating content or
    // consuming chat tokens. Other providers retain a safe presence check.
    if ($row['provider'] === 'openai') {
        $ch = curl_init('https://api.openai.com/v1/models');
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => ["Authorization: Bearer $key"],
            CURLOPT_TIMEOUT => 20,
            CURLOPT_SSL_VERIFYPEER => true,
        ]);
        $body = curl_exec($ch);
        $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);
        if ($body === false || $code >= 400) {
            send_json([
                'ok' => false,
                'provider' => $row['provider'],
                'model' => $row['model'],
                'has_api_key' => true,
                'message' => $error ?: "OpenAI rejected the key (HTTP $code).",
            ], 422);
        }
    }
    send_json([
        'ok' => true,
        'provider' => $row['provider'],
        'model' => $row['model'],
        'has_api_key' => true,
        'message' => $row['provider'] === 'openai' ? 'OpenAI key validated successfully' : 'API key is saved. Validate it with the provider before making it active.',
    ]);
}
