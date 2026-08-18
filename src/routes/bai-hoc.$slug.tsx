import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getLesson, lessons } from "@/data/curriculum";
import { VocabCard } from "@/components/VocabCard";
import { VoiceSettings } from "@/components/VoiceSettings";
import { ReadingBlock } from "@/components/ReadingBlock";
import { SpeakButton } from "@/components/SpeakButton";
import { ListenPractice } from "@/components/practice/ListenPractice";
import { SpeakPractice } from "@/components/practice/SpeakPractice";
import { WritePractice } from "@/components/practice/WritePractice";

export const Route = createFileRoute("/bai-hoc/$slug")({
  loader: ({ params }) => {
    const lesson = getLesson(params.slug);
    if (!lesson) throw notFound();
    return lesson;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Bài học tiếng Anh cho bé | Owly English` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} (${loaderData.titleVi})` },
          { property: "og:description", content: loaderData.summary },
        ]
      : [],
  }),
  component: LessonPage,
});

function LessonPage() {
  const lesson = Route.useLoaderData();
  const next = lessons.find((l) => l.order === lesson.order + 1);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/bai-hoc" className="text-sm font-bold text-muted-foreground">
        ← Tất cả bài học
      </Link>
      <h1 className="mt-3 font-display text-4xl font-extrabold">
        <span aria-hidden>{lesson.emoji}</span> {lesson.title}
      </h1>
      <p className="text-lg text-muted-foreground">{lesson.titleVi}</p>
      <p className="mt-2">{lesson.summary}</p>
      {lesson.source && (
        <p className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
          📘 Bám giáo trình: {lesson.source}
        </p>
      )}

      <div className="mt-5">
        <VoiceSettings />
        <p className="mt-1.5 text-xs text-muted-foreground">
          🔊 Chọn giọng <strong>Cô giáo</strong> (nữ) hoặc <strong>Thầy giáo</strong> (nam) ngưới
          bản địa, tốc độ <strong>Chậm</strong> cho bé mới nghe — áp dụng cho mọi nút loa trong
          bài.
        </p>
      </div>


      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">1️⃣ Từ vựng có hình</h2>
        <p className="text-sm text-muted-foreground">
          Bấm vào hình để xem nghĩa, bấm “Đọc” để nghe phát âm chuẩn Anh–Anh.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {lesson.vocab.map((v) => (
            <VocabCard key={v.word} item={v} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">2️⃣ Video sinh động</h2>
        <div className="card-pop mt-4 overflow-hidden p-2">
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${lesson.video.youtubeId}`}
              title={lesson.video.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 p-3">
            <p className="text-sm font-semibold text-muted-foreground">{lesson.video.title}</p>
            <a
              href={`https://www.youtube.com/watch?v=${lesson.video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-border bg-card px-3 py-1 text-xs font-bold"
            >
              ▶️ Mở trên YouTube
            </a>
          </div>
        </div>

        {lesson.extraVideos?.length ? (
          <div className="mt-4">
            <p className="font-display text-lg font-bold">🎬 Video mở rộng</p>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {lesson.extraVideos.map((v) => (
                <li key={v.youtubeId}>
                  <a
                    href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-pop block p-3 text-sm transition-transform hover:-translate-y-0.5"
                  >
                    <span className="font-semibold">▶️ {v.title}</span>
                    <span className="block text-xs text-muted-foreground">{v.channel}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>


      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">3️⃣ Ngữ pháp: {lesson.grammar.title}</h2>
        <div className="card-pop mt-4 p-5">
          <p className="rounded-xl bg-primary/10 p-3 text-center font-display text-lg font-bold text-primary">
            {lesson.grammar.formula}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">💡 {lesson.grammar.note}</p>
          <ul className="mt-4 space-y-2">
            {lesson.grammar.examples.map((e) => (
              <li key={e.en} className="flex flex-wrap items-center gap-3 rounded-xl bg-muted/60 p-3">
                <span className="font-display text-lg font-semibold">{e.en}</span>
                <span className="text-sm text-muted-foreground">{e.vi}</span>
                <SpeakButton text={e.en} className="ml-auto" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">4️⃣ Đoạn văn rõ cấu trúc</h2>
        <div className="mt-4">
          <ReadingBlock
            title={lesson.reading.title}
            chunks={lesson.reading.chunks}
            viTranslation={lesson.reading.viTranslation}
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">5️⃣ 🎧 Thực hành nghe</h2>
        <div className="mt-4">
          <ListenPractice questions={lesson.listen} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">6️⃣ 🗣️ Thực hành nói</h2>
        <div className="mt-4">
          <SpeakPractice items={lesson.speak} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">7️⃣ ✍️ Thực hành viết</h2>
        <div className="mt-4">
          <WritePractice questions={lesson.write} />
        </div>
      </section>

      {next && (
        <Link
          to="/bai-hoc/$slug"
          params={{ slug: next.slug }}
          className="mt-12 flex items-center justify-between rounded-2xl bg-primary p-5 font-display text-lg font-bold text-primary-foreground shadow-pop"
        >
          <span>
            Bài tiếp theo: {next.emoji} {next.title}
          </span>
          <span aria-hidden>→</span>
        </Link>
      )}
    </main>
  );
}
