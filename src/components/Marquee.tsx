const items = [
  "Web Platforms",
  "Custom Applications",
  "IT Consultancy",
  "Network Infrastructure",
  "Workflow Automation",
];

function Half() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="mx-8 font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
            {item}
          </span>
          <span className="h-1 w-1 rounded-full bg-green/60" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink/10 py-5">
      <div className="flex w-max animate-marquee">
        <Half />
        <Half />
      </div>
    </div>
  );
}