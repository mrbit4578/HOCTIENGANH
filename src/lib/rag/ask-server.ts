/**
 * LLM client — calls DashScope/Qwen API directly from the browser.
 * API key is read from import.meta.env (VITE_OWLY_LLM_*).
 * Falls back gracefully when not configured.
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
  const baseUrl =
    import.meta.env.VITE_OWLY_LLM_BASE_URL ||
    "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
  const apiKey = import.meta.env.VITE_OWLY_LLM_API_KEY || "";
  const model = import.meta.env.VITE_OWLY_LLM_MODEL || "qwen3.8-max";

  if (!apiKey) {
    return { mode: "not-configured" };
  }

  const systemPrompt = `Bạn là Cô Owly 🦉, trợ lý dạy tiếng Anh cho trẻ em 6-12 tuổi Việt Nam.
Quy tắc:
- Trả lời tối đa 80 từ, dùng tiếng Anh đơn giản + giải thích tiếng Việt.
- KHÔNG bịa thông tin ngoài ngữ cảnh được cung cấp.
- Nếu không biết, nói thẳng "Cô chưa có thông tin về điều này".
- An toàn cho trẻ em, thân thiện, khích lệ.
- Luôn gắn ví dụ tiếng Anh trong dấu ngoặc kép.`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Ngữ cảnh từ giáo trình:\n${data.context}\n\nCâu hỏi của bé: ${data.question}` },
        ],
        max_tokens: 200,
        temperature: 0.3,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const bodyText = await response.text().catch(() => "");
      return { mode: "error", error: `HTTP ${response.status}: ${bodyText.slice(0, 150)}` };
    }

    const json = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const text = json.choices?.[0]?.message?.content ?? "";

    return { mode: "llm", text };
  } catch (err) {
    return { mode: "error", error: err instanceof Error ? err.message : "Unknown error" };
  }
}
