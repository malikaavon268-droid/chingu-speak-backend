-- Safe, additive migration for an existing Hostinger MySQL database.
-- It does not delete users, messages, settings, or existing API keys.

INSERT INTO app_settings (`key`, `value`, `category`, `description`) VALUES
  ('active_llm_provider', 'openai', 'llm', 'Provider used by PHP mobile endpoints')
ON DUPLICATE KEY UPDATE
  `value` = IF(`value` IN ('', 'emergent', '"emergent"'), 'openai', `value`),
  `category` = 'llm',
  `description` = 'Provider used by PHP mobile endpoints';

-- Keep any Emergent preview key stored for reference, but never select it as
-- the active Hostinger PHP provider. Raw PHP cannot call the preview-only key.
UPDATE llm_keys
SET is_active = 0
WHERE api_key LIKE 'sk-emergent-%';