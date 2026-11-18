"""Chingu AI reply engine — APInex (OpenAI-compatible) provider.

APInex (https://api.apinex.bond/v1) exposes an OpenAI-compatible
chat-completions API. This module wraps it so Chingu's chat replies can run
on it as the primary engine, independent of the Gemini/OpenAI models used
elsewhere (translation, TTS, STT, pronunciation scoring).
"""

import asyncio
import logging
import os

from openai import AsyncOpenAI

logger = logging.getLogger("apinex_llm")

APINEX_BASE_URL = "https://api.apinex.bond/v1"
APINEX_MODEL = os.environ.get("APINEX_MODEL", "free/gpt-6-luna")

_client: AsyncOpenAI | None = None


def _get_client() -> AsyncOpenAI | None:
    global _client
    api_key = os.environ.get("APINEX_API_KEY", "").strip()
    if not api_key:
        return None
    if _client is None:
        _client = AsyncOpenAI(api_key=api_key, base_url=APINEX_BASE_URL)
    return _client


def apinex_configured() -> bool:
    return bool(os.environ.get("APINEX_API_KEY", "").strip())


async def apinex_chat_reply(
    system_message: str,
    prompt: str,
    model: str | None = None,
    retries: int = 1,
) -> str:
    """Call APInex's chat-completions endpoint and return the reply text.

    Raises on failure (empty key, network error, empty response) so the
    caller can fall back to another provider.
    """
    client = _get_client()
    if client is None:
        raise RuntimeError("APINEX_API_KEY not configured")

    use_model = model or APINEX_MODEL
    last_exc: Exception | None = None
    for attempt in range(retries + 1):
        try:
            res = await client.chat.completions.create(
                model=use_model,
                messages=[
                    {"role": "system", "content": system_message},
                    {"role": "user", "content": prompt},
                ],
            )
            text = (res.choices[0].message.content or "").strip()
            if not text:
                raise RuntimeError("APInex returned an empty reply")
            return text
        except Exception as exc:  # noqa: BLE001
            last_exc = exc
            logger.warning("APInex chat attempt %s failed: %s", attempt + 1, exc)
            if attempt < retries:
                await asyncio.sleep(0.4 * (attempt + 1))
    raise last_exc or RuntimeError("APInex request failed")
