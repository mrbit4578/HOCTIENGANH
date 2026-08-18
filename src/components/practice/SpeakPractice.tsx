import { useRef, useState } from "react";
import { Mic, Square } from "lucide-react";
import { createRecognizer, scoreSpeech } from "@/lib/speech";
import { SpeakButton } from "../SpeakButton";
import { cn } from "@/lib/utils";

type Result = { said: string; score: number };

export function SpeakPractice({ items }: { items: { sentence: string; vi: string }[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [results, setResults] = useState<Record<number, Result>>({});
  const [unsupported, setUnsupported] = useState(false);
  const recRef = useRef<ReturnType<typeof createRecognizer>>(null);

  const listen = (index: number, target: string) => {
    const rec = createRecognizer();
    if (!rec) {
      setUnsupported(true);
      return;
    }
    recRef.current = rec;
    setActive(index);
    rec.onresult = (e) => {
      const said = e.results[0]?.[0]?.transcript ?? "";
      setResults((r) => ({ ...r, [index]: { said, score: scoreSpeech(target, said) } }));
    };
    rec.onerror = () => setActive(null);
    rec.onend = () => setActive(null);
    rec.start();
  };

  return (
    <div className="space-y-4">
      {unsupported && (
        <p className="rounded-xl bg-sun/40 p-3 text-sm font-semibold">
          Trình duyệt này chưa hỗ trợ chấm giọng nói. Bé vẫn có thể bấm “Nghe mẫu” và nhắc lại
          (shadowing) nhé — hãy thử trên Chrome để chấm điểm.
        </p>
      )}
      {items.map((it, i) => {
        const res = results[i];
        return (
          <div key={it.sentence} className="card-pop p-4">
            <p className="font-display text-lg font-bold">{it.sentence}</p>
            <p className="text-sm text-muted-foreground">{it.vi}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <SpeakButton text={it.sentence} label="Nghe mẫu" />
              <SpeakButton text={it.sentence} label="Nghe chậm" slow />
              <button
                type="button"
                onClick={() => listen(i, it.sentence)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border-2 border-border px-4 py-1.5 text-sm font-bold",
                  active === i
                    ? "animate-wiggle bg-destructive text-destructive-foreground"
                    : "bg-primary text-primary-foreground",
                )}
              >
                {active === i ? <Square className="size-4" /> : <Mic className="size-4" />}
                {active === i ? "Đang nghe bé nói…" : "Bé nói thử"}
              </button>
            </div>
            {res && (
              <div className="mt-3 rounded-xl bg-muted p-3 text-sm">
                <p>
                  Bé đã nói: <span className="font-semibold">“{res.said}”</span>
                </p>
                <p
                  className={cn(
                    "mt-1 font-display text-lg font-bold",
                    res.score >= 80 ? "text-success" : res.score >= 50 ? "text-sun-foreground" : "text-destructive",
                  )}
                >
                  {res.score}% khớp {res.score >= 80 ? "🎉 Tuyệt vời!" : res.score >= 50 ? "👍 Thử lại nào!" : "💪 Nghe mẫu rồi nói lại nhé"}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
