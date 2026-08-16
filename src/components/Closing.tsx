import Reveal from "./Reveal";

export default function Closing() {
  return (
    <>
      <section className="px-6 py-24 md:px-16 md:py-32">
        <Reveal>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-green">Back Page</p>
          <h2 className="max-w-4xl font-serif font-semibold leading-[1.1] text-[clamp(2rem,5vw,4.5rem)]">
            Stop letting bad systems bleed your time and revenue.
          </h2>
          <a
            href="https://wa.me/254736194051?text=Hi%20Sonny,%20I've%20read%20the%20journal.%20I%20think%20my%20business%20has%20a%20systems%20problem."
            target="_blank"
            className="group mt-12 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm uppercase tracking-widest transition-colors hover:border-green hover:text-green"
          >
            Begin the diagnostic
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </Reveal>
      </section>

      <footer className="flex flex-col justify-between gap-4 border-t border-ink/10 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:flex-row md:px-16">
        <span>© 2026 Sonny Sayi Solutions</span>
        <span>info@sonnysayisolutions.co.ke</span>
        <span>+254 736 194 051</span>
      </footer>
    </>
  );
}