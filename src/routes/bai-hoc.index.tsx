import { createFileRoute, Link } from "@tanstack/react-router";
import { levels, lessons } from "@/data/curriculum";

export const Route = createFileRoute("/bai-hoc/")({
  head: () => ({
    meta: [
      { title: "Thư viện bài học tiếng Anh cho bé | Owly English" },
      {
        name: "description",
        content:
          "Danh sách bài học theo cấp Starters, Movers, Flyers: từ vựng có hình, video, ngữ pháp và bài tập nghe nói viết.",
      },
      { property: "og:title", content: "Thư viện bài học tiếng Anh cho bé" },
      {
        property: "og:description",
        content: "Chọn bài học theo cấp độ và luyện đủ 4 kỹ năng cùng chú cú Owly.",
      },
    ],
  }),
  component: LessonList,
});

function LessonList() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl font-extrabold">📚 Thư viện bài học</h1>
      <p className="mt-3 text-muted-foreground">
        Mỗi bài gồm: từ vựng hình ảnh → video → ngữ pháp → đoạn văn phân tích → thực hành nghe, nói,
        viết.
      </p>

      {levels.map((lv) => {
        const items = lessons.filter((l) => l.level === lv.id);
        if (!items.length) return null;
        return (
          <section key={lv.id} className="mt-10">
            <h2 className="font-display text-2xl font-bold">
              {lv.emoji} {lv.name}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((l) => (
                <Link
                  key={l.slug}
                  to="/bai-hoc/$slug"
                  params={{ slug: l.slug }}
                  className="card-pop p-5 transition-transform hover:-translate-y-1"
                >
                  <span className="text-4xl" aria-hidden>
                    {l.emoji}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold">
                    Bài {l.order}. {l.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{l.titleVi}</p>
                  <p className="mt-2 text-sm">{l.summary}</p>
                  <p className="mt-3 text-xs font-bold text-primary">
                    {l.vocab.length} từ mới · 🎧 {l.listen.length} · 🗣️ {l.speak.length} · ✍️{" "}
                    {l.write.length}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
