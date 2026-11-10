// The homepage reads as one numbered trace. Each stop draws its own thread segment in the gutter,
// and its kicker puts a station on that thread. CSS only: see .thread and .station in globals.css.

export function Thread() {
  return <div aria-hidden className="thread" />;
}

export function Kicker({ n, label, extra, className = "" }: { n: number; label: string; extra?: string; className?: string }) {
  return (
    <p className={`kicker ${className}`}>
      <span aria-hidden className="station" />¶ <b>{String(n).padStart(2, "0")}</b> · {label}
      {extra && <span className="text-fg-3"> · {extra}</span>}
    </p>
  );
}
