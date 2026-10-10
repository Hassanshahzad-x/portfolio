import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  url?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

// A real product screenshot in a minimal frame. The bar shows the live domain, nothing invented.
export function ProjectFrame({ src, alt, url, sizes, priority, className = "" }: Props) {
  const host = url ? new URL(url).host.replace(/^www\./, "") : undefined;
  return (
    <div className={`overflow-hidden border border-line bg-surface ${className}`}>
      <div className="flex h-8 items-center gap-3 border-b border-line px-3">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </span>
        {host && <span className="meta truncate">{host}</span>}
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-(--dur-slow) ease-(--ease-out) group-hover:scale-[1.025]"
        />
      </div>
    </div>
  );
}
