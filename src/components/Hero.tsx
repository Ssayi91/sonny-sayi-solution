import Image from "next/image";
import LocalTime from "./LocalTime";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute -top-1/4 right-[-10%] h-[80vh] w-[80vh] rounded-full bg-green/[0.05] blur-[120px] animate-breathe" />

      {/* Folio strip */}
<div className="flex items-center justify-between border-b border-ink/10 px-6 py-5 pt-28 font-mono text-[10px] uppercase tracking-[0.3em] text-muted md:px-16 md:pt-32">
  <span>Nairobi, KE — <LocalTime /></span>
  <span className="hidden md:block">Technology & Creative Solutions Architect</span>
  <span>Volume 01</span>
</div>

   {/* Nameplate */}
<div className="border-b border-ink/10 px-6 py-12 md:px-16 md:py-16">
  <h1 className="font-serif font-semibold tracking-tight text-[clamp(2rem,5vw,4rem)] leading-none">
    <span className="line-mask"><span style={{ animationDelay: "0.1s" }}>Sonny Sayi</span></span>
    <span className="line-mask"><span style={{ animationDelay: "0.28s" }} className="text-green">Solutions</span></span>
  </h1>
</div>

     {/* Lead feature */}
<div className="relative flex flex-1 flex-col px-6 py-16 md:flex-row md:items-end md:justify-between md:px-16 md:py-20">
  <div className="max-w-xl">
    <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
      The Lead
    </p>

    <h2 className="font-serif font-semibold text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2]">
      <span className="line-mask">
        <span style={{ animationDelay: "0.4s" }}>
          Your business shouldn't depend on
        </span>
      </span>
      <span className="line-mask">
        <span style={{ animationDelay: "0.55s" }}>
          <em className="text-green font-normal">workarounds</em> to keep running.
        </span>
      </span>
    </h2>

    <p className="mt-8 max-w-md leading-[1.8] text-muted">
      The spreadsheets, WhatsApp threads, unreliable networks and outdated
      websites eventually become the system. We replace them with technology
      built around how your business actually works.
    </p>

    <div className="mt-12 flex flex-wrap items-center gap-10">
      <a
        href="https://wa.me/254736194051?text=Hi%20Sonny,%20I%20want%20to%20talk%20about%20a%20systems%20problem%20in%20my%20business."
        target="_blank"
        className="group flex items-center gap-2 border-b border-ink/30 pb-1 text-sm uppercase tracking-widest transition-colors hover:border-green hover:text-green"
      >
        Find the bottleneck
        <svg
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </a>

      <a
        href="#cures"
        className="text-sm text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
      >
        See the problems
      </a>
    </div>
  </div>

  <div className="mt-16 md:mt-0 md:pl-16">
    <div className="relative">
      <div className="h-48 w-48 rounded-full bg-green/[0.12] blur-3xl animate-breathe" />
      <p className="absolute inset-0 flex items-center justify-center font-serif text-[0.7rem] italic text-ink/60 tracking-widest uppercase">
        Systems online
      </p>
    </div>
    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
      Est. Nairobi
    </p>
  </div>
</div>

      <div className="flex items-center justify-between border-t border-ink/10 px-6 py-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted md:px-16">
        <span>Page 01 — The Cover</span>
        <span>Systems that hold under load</span>
      </div>

      <Marquee />
    </section>
  );
}