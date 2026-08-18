/**
 * Optional LLM server function — reads OWLY_LLM_* env vars.
 * Uses createServerFn (TanStack Start) so it runs on the server with CSRF protection.
 * Falls back gracefully when not configured.
 */
import { createServerFn } from "@tanstack/react-start";

type LlmRequest = {
  question: string;
  context: string;
};

type LlmResponse =
  | { mode: "llm"; text: string }
  | { mode: "not-configured" }
  | { mode: "error"; error: string };

export const askLlm = createServerFn({ method: "POST" })
  .validator((data: LlmRequest) => data)
  .handler(async ({ data }): Promise<LlmResponse> => {
    const baseUrl = process.env["OWLY_LLM_BASE_URL"] ?? "https://api.openai.com/v1";
    const apiKey =
      process.env["OWLY_LLM_API_KEY"] ||
      "sk-ws-H.DMPMRIH.mBqh.MEUCIE6wGmgiJ9WxsNeYqrqLMj6jthvAfePF7mCPBJll4hrQAiEAlrnDD1erj1kvOzWsJOKqHwdg7Q6EOb1LRT-9tMFJAqA";
    const model = process.env["OWLY_LLM_MODEL"] ?? "gpt-4o-mini";

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
        return { mode: "error", error: `LLM API returned ${response.status}` };
      }

      const json = (await response.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const text = json.choices?.[0]?.message?.content ?? "";

      return { mode: "llm", text };
    } catch (err) {
      return { mode: "error", error: err instanceof Error ? err.message : "Unknown error" };
    }
  });
