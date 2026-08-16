import Link from "next/link";
import { getAllPosts } from "../../lib/journal";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "The Journal | Sonny Sayi Solutions",
  description: "Field reports and 101 lessons on networks, automation and digital presence — written from real audits, not theory.",
};

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default function JournalIndex() {
  const posts = getAllPosts();

  return (
    <main className="pt-28 md:pt-32">
      <div className="border-b border-ink/10 px-6 py-16 md:px-16 md:py-24">
        <Reveal>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-green">The Journal</p>
          <h1 className="font-serif font-semibold leading-[1.05] text-[clamp(2.5rem,6vw,5rem)]">
            Notes from the field.
          </h1>
          <p className="mt-6 max-w-xl leading-[1.8] text-muted">
            Every article begins as a real audit. We write down what broke, why it
            broke, and the 101 behind the cure — so you can spot the fault in your
            own business before it costs you.
          </p>
        </Reveal>
      </div>

      <div className="px-6 md:px-16">
        {posts.map((p) => (
          <Reveal key={p.slug}>
            <Link
              href={`/journal/${p.slug}`}
              className="group block border-b border-ink/10 py-10 transition-colors hover:bg-surface/40 md:py-14"
            >
              <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                <span className="text-green">{p.tag}</span>
                <time dateTime={p.date}>{p.date}</time>
              </div>
              <h2 className="mt-4 max-w-3xl font-serif font-semibold text-2xl transition-colors group-hover:text-green md:text-4xl">
                {p.title}
              </h2>
              <p className="mt-4 max-w-2xl leading-[1.8] text-muted">{p.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm uppercase tracking-widest transition-colors group-hover:border-green group-hover:text-green">
                Read the field report <Arrow />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}