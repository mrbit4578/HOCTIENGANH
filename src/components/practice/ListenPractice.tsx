import { useState } from "react";
import { Check, X } from "lucide-react";
import type { ListenQuestion } from "@/data/curriculum";
import { SpeakButton } from "../SpeakButton";
import { cn } from "@/lib/utils";

export function ListenPractice({ questions }: { questions: ListenQuestion[] }) {
  const [picked, setPicked] = useState<Record<number, string>>({});

  return (
    <div className="space-y-4">
      {questions.map((q, i) => {
        const chosen = picked[i];
        return (
          <div key={q.say} className="card-pop p-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-lg font-bold">
                {i + 1}. {q.prompt}
              </span>
              <SpeakButton text={q.say} label="Nghe lần 1" />
              <SpeakButton text={q.say} label="Nghe chậm" slow />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {q.options.map((opt) => {
                const isChosen = chosen === opt;
                const correct = opt === q.answer;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setPicked((p) => ({ ...p, [i]: opt }))}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border-2 border-border px-4 py-2 font-semibold transition-colors",
                      !chosen && "bg-card hover:bg-muted",
                      chosen && correct && "bg-success text-success-foreground",
                      isChosen && !correct && "bg-destructive text-destructive-foreground",
                      chosen && !isChosen && !correct && "bg-card opacity-60",
                    )}
                  >
                    {opt}
                    {chosen && correct && <Check className="size-4" />}
                    {isChosen && !correct && <X className="size-4" />}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
