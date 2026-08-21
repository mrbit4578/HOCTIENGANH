/**
 * Vercel Serverless Function — proxy LLM API
 * Keeps API key on the server side.
 * URL: /api/ask-owly
 */
export default async function handler(req: {
  method: string;
  body: { question: string; context: string };
}) {
  if (req.method !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.VITE_OWLY_LLM_API_KEY || "";
  const baseUrl =
    process.env.VITE_OWLY_LLM_BASE_URL ||
    "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
  const model = process.env.VITE_OWLY_LLM_MODEL || "qwen3.8-max";

  if (!apiKey) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: "not-configured" }),
    };
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
          {
            role: "user",
            content: `Ngữ cảnh từ giáo trình:\n${req.body?.context || ""}\n\nCâu hỏi của bé: ${req.body?.question || ""}`,
          },
        ],
        max_tokens: 200,
        temperature: 0.3,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "error",
          error: `HTTP ${response.status}: ${errText.slice(0, 150)}`,
        }),
      };
    }

    const json = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const text = json.choices?.[0]?.message?.content ?? "";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: "llm", text }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: "error",
        error: err instanceof Error ? err.message : "Unknown error",
      }),
    };
  }
}
