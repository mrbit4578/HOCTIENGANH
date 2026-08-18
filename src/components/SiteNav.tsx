import { Link } from "@tanstack/react-router";
import { VoiceSettings } from "./VoiceSettings";

const items = [
  { to: "/", label: "Trang chủ" },
  { to: "/lo-trinh", label: "Lộ trình" },
  { to: "/bai-hoc", label: "Bài học" },
  { to: "/hoi-dap", label: "💬 Hỏi đáp" },
  { to: "/giao-trinh", label: "Giáo trình" },
  { to: "/ba-me", label: "Góc ba mẹ" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3">
        <Link to="/" className="mr-auto flex items-center gap-2">
          <span className="text-2xl" aria-hidden>
            🦉
          </span>
          <span className="font-display text-xl font-bold">Owly English</span>
        </Link>
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            activeOptions={{ exact: it.to === "/" }}
            className="rounded-full px-3 py-1.5 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted"
            activeProps={{ className: "bg-primary text-primary-foreground" }}
          >
            {it.label}
          </Link>
        ))}
        <VoiceSettings compact />
      </nav>
    </header>
  );
}
