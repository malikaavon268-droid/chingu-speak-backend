"""Shared resilient streaming helper for Emergent LLM calls."""

import asyncio
import inspect
from collections.abc import Awaitable, Callable

from emergentintegrations.llm.chat import LlmChat, StreamDone, TextDelta, UserMessage


ChatFactory = Callable[[], LlmChat | Awaitable[LlmChat]]
TRANSIENT_MARKERS = (
    "budget_exceeded",
    "budget has been exceeded",
    "rate limit",
    "rate_limit",
    "temporarily unavailable",
    "timeout",
    "connection",
    "overloaded",
)


async def stream_llm_text(factory: ChatFactory, message: UserMessage, retries: int = 1) -> str:
    """Collect a streamed response, retrying one transient provider failure."""
    for attempt in range(retries + 1):
        try:
            candidate = factory()
            chat = await candidate if inspect.isawaitable(candidate) else candidate
            chunks: list[str] = []
            async for event in chat.stream_message(message):
                if isinstance(event, TextDelta):
                    chunks.append(event.content)
                elif isinstance(event, StreamDone):
                    break
            text = "".join(chunks).strip()
            if not text:
                raise RuntimeError("LLM returned an empty streamed response")
            return text
        except Exception as exc:
            transient = any(marker in str(exc).lower() for marker in TRANSIENT_MARKERS)
            if attempt >= retries or not transient:
                raise
            await asyncio.sleep(0.4 * (attempt + 1))

    raise RuntimeError("LLM request failed")