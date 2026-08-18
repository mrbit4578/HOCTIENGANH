/**
 * AskOwly — Chat UI with RAG-powered Q&A, typing challenge, and stats.
 * Helps kids practice typing while learning English.
 */
import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { Send, Volume2, Sparkles, Keyboard, MessageCircle, RotateCcw } from "lucide-react";
import { retrieve } from "@/lib/rag/retriever";
import { composeAnswer, type Answer } from "@/lib/rag/answerer";
import { suggestedQuestions } from "@/lib/rag/knowledge";
import { askLlm } from "@/lib/rag/ask-server";
import { speak } from "@/lib/speech";

// ── Types ───────────────────────────────────────────────────────────────

type Message = {
  id: number;
  role: "kid" | "owly";
  text: string;
  answer?: Answer | undefined;
  isLlm?: boolean | undefined;
};

type TypingStats = { words: number; chars: number; challenges: number };

const STATS_KEY = "owly-typing-stats";

function loadStats(): TypingStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (raw) return JSON.parse(raw) as TypingStats;
  } catch { /* ignore */ }
  return { words: 0, chars: 0, challenges: 0 };
}

function saveStats(s: TypingStats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(s));
}

// ── Component ───────────────────────────────────────────────────────────

export function AskOwly() {
  const [messages, setMessages] = useState<Message[]>(() => [{
    id: 0, role: "owly",
    text: "🦉 Chào bé! Cô là **Owly** — cô cú thông thái. Bé gõ câu hỏi tiếng Anh ở ô bên dưới nhé! Ví dụ: \"apple nghĩa là gì?\" hoặc \"cách dùng a an\".",
    answer: {
      text: "", sources: [], speakText: "Hello! I am Owly, your English teacher. Ask me anything!",
      corrective: false,
    },
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<TypingStats>(loadStats);
  const [llmStatus, setLlmStatus] = useState<"unknown" | "checking" | "on" | "off">("checking");
  const [llmError, setLlmError] = useState<string | null>(null);
  const [chips, setChips] = useState<string[]>(() => pickRandom(suggestedQuestions, 4));
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  // Probe LLM availability on mount
  useEffect(() => {
    let active = true;
    void askLlm({ data: { question: "hi", context: "greeting" } })
      .then((res) => {
        if (!active) return;
        if (res.mode === "llm") {
          setLlmStatus("on");
          setLlmError(null);
        } else if (res.mode === "not-configured") {
          setLlmStatus("off");
        } else if (res.mode === "error") {
          setLlmStatus("off");
          setLlmError(res.error);
        }
      })
      .catch((err: unknown) => {
        if (!active) return;
        setLlmStatus("off");
        setLlmError(err instanceof Error ? err.message : "Connection failed");
      });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const rotateChips = useCallback(() => {
    setChips(pickRandom(suggestedQuestions, 4));
  }, []);

  const handleSend = useCallback(async () => {
    const q = input.trim();
    if (!q || loading) return;

    // Update typing stats
    const wordCount = q.split(/\s+/).length;
    const newStats = { ...stats, words: stats.words + wordCount, chars: stats.chars + q.length };
    setStats(newStats);
    saveStats(newStats);

    // Add kid message
    const kidMsg: Message = { id: nextId.current++, role: "kid", text: q };
    setMessages(prev => [...prev, kidMsg]);
    setInput("");
    setLoading(true);

    try {
      // 1. Retrieve locally (instant)
      const results = retrieve(q, 5);
      const localAnswer = composeAnswer(q, results);

      // 2. Try LLM if status is not "off"
      let finalAnswer = localAnswer;
      let isLlm = false;

      if (llmStatus !== "off" && !localAnswer.corrective) {
        try {
          const context = results.slice(0, 3).map(r => r.chunk.text).join("\n\n");
          const llmResult = await askLlm({ data: { question: q, context } });

          if (llmResult.mode === "not-configured") {
            setLlmStatus("off");
          } else if (llmResult.mode === "llm") {
            setLlmStatus("on");
            isLlm = true;
            finalAnswer = {
              ...localAnswer,
              text: `🤖 ${llmResult.text}`,
              speakText: extractFirstEnglish(llmResult.text) || localAnswer.speakText,
            };
          } else {
            if (llmResult.mode === "error") setLlmError(llmResult.error);
            setLlmStatus("off");
          }
        } catch (err) {
          setLlmStatus("off");
          setLlmError(err instanceof Error ? err.message : "Error calling LLM");
        }
      }

      // 3. Add owly message
      const owlyMsg: Message = {
        id: nextId.current++,
        role: "owly",
        text: finalAnswer.text,
        answer: finalAnswer,
        isLlm,
      };
      setMessages(prev => [...prev, owlyMsg]);
      rotateChips();
    } catch {
      setMessages(prev => [...prev, {
        id: nextId.current++, role: "owly",
        text: "🦉 Ôi, có lỗi xảy ra. Bé thử hỏi lại nhé!",
      }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }, [input, loading, stats, llmStatus, rotateChips]);

  const handleChipClick = useCallback((q: string) => {
    setInput(q);
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 140px)" }}>
      {/* Stats bar */}
      <div className="flex flex-wrap items-center gap-3 border-b-2 border-border px-4 py-2 text-sm">
        <span className="flex items-center gap-1.5 font-bold text-primary">
          <Keyboard className="size-4" />
          {stats.words} từ đã gõ
        </span>
        <span className="flex items-center gap-1.5 font-bold text-success">
          <MessageCircle className="size-4" />
          {messages.filter(m => m.role === "kid").length} câu hỏi
        </span>
        <span className="flex items-center gap-1.5 font-bold text-grape">
          <Sparkles className="size-4" />
          {stats.challenges} thử thách
        </span>
        <div className="ml-auto flex items-center gap-2">
          {llmError && (
            <span className="text-xs text-destructive font-mono bg-destructive/10 px-2 py-0.5 rounded">
              {llmError}
            </span>
          )}
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              llmStatus === "on"
                ? "bg-success/20 text-success"
                : llmStatus === "checking"
                ? "bg-sun/20 text-sun-foreground animate-pulse"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {llmStatus === "on"
              ? "🤖 LLM + RAG (Online)"
              : llmStatus === "checking"
              ? "⏳ Đang nối AI..."
              : "🦉 Offline RAG"}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === "kid" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
              msg.role === "kid"
                ? "bg-primary text-primary-foreground rounded-br-md"
                : "bg-card border-2 border-border rounded-bl-md shadow-pop"
            }`}>
              <RichText text={msg.text} />

              {msg.answer && (
                <div className="mt-3 space-y-2">
                  {/* Speak button */}
                  {msg.answer.speakText && (
                    <button
                      type="button"
                      onClick={() => speak(msg.answer!.speakText)}
                      className="inline-flex items-center gap-1.5 rounded-full border-2 border-border bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      <Volume2 className="size-3.5" /> Nghe phát âm
                    </button>
                  )}

                  {/* Source chips */}
                  {msg.answer.sources.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {msg.answer.sources.map((s, i) => (
                        s.lessonSlug ? (
                          <Link
                            key={i}
                            to="/bai-hoc/$slug"
                            params={{ slug: s.lessonSlug }}
                            className="rounded-full bg-sky/15 px-2.5 py-0.5 text-xs font-bold text-sky hover:bg-sky/25 transition-colors"
                          >
                            📘 {s.label}
                          </Link>
                        ) : (
                          <span key={i} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold text-muted-foreground">
                            📌 {s.label}
                          </span>
                        )
                      ))}
                    </div>
                  )}

                  {/* Suggestion chips (corrective) */}
                  {msg.answer.suggestions && msg.answer.suggestions.length > 0 && (
                    <div className="space-y-1.5">
                      <p className="text-xs font-bold text-muted-foreground">💡 Thử hỏi:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.answer.suggestions.map((sq, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleChipClick(sq)}
                            className="rounded-full bg-sun/20 px-3 py-1 text-xs font-bold text-sun-foreground hover:bg-sun/40 transition-colors"
                          >
                            {sq}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Typing challenge */}
                  {msg.answer.typingChallenge && (
                    <TypingChallenge
                      target={msg.answer.typingChallenge}
                      onComplete={() => {
                        const ns = { ...stats, challenges: stats.challenges + 1 };
                        setStats(ns);
                        saveStats(ns);
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-card border-2 border-border px-4 py-3 shadow-pop">
              <span className="animate-pulse text-lg">🦉 Cô Owly đang tìm…</span>
            </div>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Suggestion chips */}
      <div className="flex items-center gap-2 overflow-x-auto border-t border-border px-4 py-2">
        <button type="button" onClick={rotateChips} className="shrink-0 rounded-full border-2 border-border p-1.5 text-muted-foreground hover:bg-muted transition-colors" aria-label="Đổi gợi ý">
          <RotateCcw className="size-3.5" />
        </button>
        {chips.map((q, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleChipClick(q)}
            className="shrink-0 whitespace-nowrap rounded-full border-2 border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground hover:bg-muted transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input bar */}
      <div className="border-t-2 border-border bg-card px-4 py-3">
        <form
          onSubmit={(e) => { e.preventDefault(); void handleSend(); }}
          className="mx-auto flex max-w-3xl items-center gap-3"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Bé gõ câu hỏi ở đây… (tập gõ thật đẹp nhé ⌨️)"
            className="flex-1 rounded-full border-2 border-border bg-background px-5 py-3 text-base font-semibold outline-none transition-colors focus:border-primary"
            disabled={loading}
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-pop transition-transform hover:-translate-y-0.5 disabled:opacity-40"
          >
            <Send className="size-5" />
          </button>
        </form>
        <p className="mt-1 text-center text-xs text-muted-foreground">
          Bấm gợi ý để điền sẵn — bé tự nhấn Enter nhé ⌨️
        </p>
      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────

/** Simple markdown-lite renderer: **bold** and line breaks. */
function RichText({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-1 text-sm leading-relaxed">
      {lines.map((line, i) => (
        <p key={i} dangerouslySetInnerHTML={{
          __html: line
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/«(.+?)»/g, "<em class='text-primary font-bold'>$1</em>"),
        }} />
      ))}
    </div>
  );
}

/** Typing challenge card: kid types English sentence, per-char color feedback. */
function TypingChallenge({ target, onComplete }: { target: string; onComplete: () => void }) {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);
  const [startTime] = useState(() => Date.now());

  const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

  useEffect(() => {
    if (norm(value) === norm(target) && !done) {
      setDone(true);
      onComplete();
    }
  }, [value, target, done, onComplete]);

  const elapsed = done ? ((Date.now() - startTime) / 1000).toFixed(1) : null;

  return (
    <div className="mt-2 rounded-xl border-2 border-dashed border-sun bg-sun/10 p-3">
      <p className="text-xs font-bold text-sun-foreground mb-1.5">
        ✍️ Thử thách đánh máy — gõ lại câu này:
      </p>
      <p className="mb-2 font-display text-sm font-bold text-foreground">{target}</p>

      {/* Character comparison */}
      {value.length > 0 && !done && (
        <div className="mb-2 font-mono text-sm leading-relaxed">
          {value.split("").map((ch, i) => {
            const expected = target[i]?.toLowerCase() ?? "";
            const correct = ch.toLowerCase() === expected;
            return (
              <span key={i} className={correct ? "text-success font-bold" : "text-destructive font-bold underline"}>
                {ch}
              </span>
            );
          })}
        </div>
      )}

      {done ? (
        <div className="rounded-lg bg-success/15 p-2 text-center">
          <p className="font-display text-sm font-bold text-success">
            🎉 Tuyệt vời! Hoàn thành trong {elapsed}s!
          </p>
        </div>
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Gõ ở đây…"
          className="w-full rounded-lg border-2 border-border bg-background px-3 py-2 text-sm font-semibold outline-none focus:border-primary"
          autoComplete="off"
          spellCheck={false}
        />
      )}
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function extractFirstEnglish(text: string): string {
  const match = text.match(/"([A-Z][^"]*[.!?])"/);
  return match ? match[1]! : "";
}
