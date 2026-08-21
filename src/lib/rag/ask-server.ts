/**
 * LLM client — calls server proxy /api/ask-owly to keep API key secure.
 * The proxy (Vite dev middleware or Vercel serverless function) forwards
 * the request to DashScope/Qwen API without exposing the key to the browser.
 *
 * Falls back gracefully when not configured or offline.
 */

type LlmRequest = {
  question: string;
  context: string;
};

type LlmResponse =
  | { mode: "llm"; text: string }
  | { mode: "not-configured" }
  | { mode: "error"; error: string };

export async function askLlm({ data }: { data: LlmRequest }): Promise<LlmResponse> {
  // No API key in env → skip the network call entirely
  const hasKey = import.meta.env.VITE_OWLY_LLM_API_KEY;
  if (!hasKey) {
    return { mode: "not-configured" };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);

    const response = await fetch("/api/ask-owly", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: data.question,
        context: data.context,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return { mode: "error", error: `HTTP ${response.status}` };
    }

    return (await response.json()) as LlmResponse;
  } catch (err) {
    return { mode: "error", error: err instanceof Error ? err.message : "Unknown error" };
  }
}
