# ChinguSpeak PHP Admin Backend

A complete PHP 8.0+ backend for the ChinguSpeak Admin Panel, ready to upload to Hostinger shared hosting.

It exposes the **exact same REST API** as the Python preview backend, so the React admin panel works without any code change — just point `REACT_APP_BACKEND_URL` at your Hostinger domain.

## Quick start on Hostinger

1. Create a MySQL database in `hPanel → Databases → MySQL`.
2. Open `phpMyAdmin` and import `db/schema.sql`.
3. Open `config/config.php` and fill in DB host, name, user, password, and `JWT_SECRET`.
4. Upload the entire folder to `public_html/api` (or any subfolder).
5. Make sure `public_html/api/.htaccess` is included (it routes all `/api/*` requests through `index.php`).
6. Visit `https://yourdomain.com/api/health` — you should see `{"status":"ok"}`.
7. Login with the seeded admin (see `config/config.php`).

## Hostinger production setup (existing database)

For `https://linen-wolf-239815.hostingersite.com/api`:

1. Upload the **contents** of `php-backend/` into `public_html/api/`, including `.htaccess`.
2. In `config/config.php`, set the Hostinger MySQL host, database name, user, password, a unique `JWT_SECRET`, `CORS_ORIGIN` to `https://linen-wolf-239815.hostingersite.com`, and `SHOW_ERRORS` to `false`.
3. In phpMyAdmin, run `db/migrate_hostinger_llm.sql`. It is additive and preserves existing users, messages, settings, and keys.
4. Open your deployed admin panel → **LLM & API Keys** → **Add Key**. Add an **OpenAI** key with model `gpt-4o-mini`, enable **Active**, then select **Test**. The Test action performs a no-token OpenAI credentials check.
5. The Expo production configuration in `frontend/.env.production` already targets `https://linen-wolf-239815.hostingersite.com`; create a new Android APK after uploading the PHP API.

Optional voice transcription uses a **Deepgram** key. Add it in **Settings** as `deepgram_api_key` or as an active `deepgram` entry in **LLM & API Keys**. There are no hardcoded provider keys in this project.

> The Emergent Universal Key is available only to the Emergent preview backend. It is not usable by raw PHP on Hostinger. Keep it inactive in the hosted PHP admin and use a real OpenAI key for chat, translation, TTS, and vision.

## Folder structure

```
php-backend/
├── .htaccess               # URL rewriting → index.php
├── index.php               # single-front-controller router
├── config/config.php       # DB + JWT + admin seed config
├── db/schema.sql           # MySQL schema (tables + seeds)
├── lib/                    # JWT, DB, helpers
│   ├── db.php
│   ├── jwt.php
│   ├── auth.php
│   ├── http.php
│   └── seed.php
└── api/                    # endpoint handlers, one per route group
    ├── auth.php
    ├── admins.php
    ├── llm_keys.php
    ├── settings.php
    ├── users.php
    ├── languages.php
    ├── scenarios.php
    ├── styles.php
    ├── dashboard.php
    ├── broadcast.php
    └── export.php
```

## API contract

All endpoints under `/api`:

- `POST /api/auth/login` → `{ access_token, admin }`
- `GET  /api/auth/me`
- `GET  /api/dashboard/overview`
- `GET  /api/dashboard/top-users`
- CRUD: `/api/llm-keys`, `/api/users`, `/api/languages`, `/api/scenarios`, `/api/styles`, `/api/admins`, `/api/settings`, `/api/broadcast`
- `GET  /api/export?kind=users&fmt=csv`

All protected endpoints require `Authorization: Bearer <token>`.

## Mobile app usage

Your Expo app should call `https://yourdomain.com/api/...` to fetch active LLM keys, settings, scenarios, etc. The mobile app reads:

- `GET /api/public/active-llm-key` (returns the single active key safely — not implemented yet, easy to add)
- `GET /api/public/scenarios`
- `GET /api/public/languages`
