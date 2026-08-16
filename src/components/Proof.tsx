import Reveal from "./Reveal";

const systems = [
  {
    number: "01",
    title: "AutoShow Kenya",
    meta: "Web Platform — Car Marketplace",
    cure:
      "Buying a used car often starts with the same problem: too many listings, too little confidence. We built a marketplace where buyers can see the vehicle, identify the seller, verify the dealer's physical location and start a direct conversation on WhatsApp. Less guessing. More information before the buyer makes the call.",
    live: "https://www.autoshowkenya.co.ke",
    liveLabel: "autoshowkenya.co.ke",
  },
  {
    number: "02",
    title: "CallBoda",
    meta: "Custom Application — Hyperlocal Logistics",
    cure:
      "Finding a boda in the neighborhood should not require a platform taking a cut from the rider. We built a local directory that lets residents find riders by stage, view their details and call them directly. No dispatch layer. No commission. The rider keeps the fare, and the customer gets a direct connection.",
    live: "https://www.callboda.top",
    liveLabel: "callboda.top",
  },
  {
    number: "03",
    title: "The Sidelined Gem",
    meta: "Web Platform — Advocacy & Research",
    cure:
      "Important research becomes difficult to discover when it lives across scattered documents, articles and conversations. We built a dedicated digital platform that brings research, reflections and resources around linguistic human rights and Deaf culture into one structured place. The work becomes searchable, accessible and easier to understand.",
    live: "https://sidelined-gem-main.vercel.app",
    liveLabel: "the sidelined gem",
  },
];

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default function Proof() {
  return (
    <section id="proof">
      <div className="border-b border-ink/10 px-6 py-16 md:px-16 md:py-24">
        <Reveal>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-green">The Proof</p>
        <h2 className="max-w-3xl font-serif font-semibold leading-[1.05] text-[clamp(2rem,5vw,4rem)]">
  Problems we turned into systems.
</h2>

<p className="mt-6 max-w-xl leading-[1.8] text-muted">
  These aren't concept pieces. They're live systems built around real
  problems: trust, manual processes, fragmented information and inefficient
  ways of working. Open one. Use it. Judge the work by what actually shipped.
</p>
        </Reveal>
      </div>

      <div className="border-b border-ink/10 px-6 md:px-16">
        {systems.map((s) => (
          <Reveal key={s.number}>
            <a
              href={s.live}
              target="_blank"
              className="group block border-b border-ink/10 py-10 transition-colors last:border-b-0 hover:bg-surface/40 md:py-12"
            >
              <div className="flex items-baseline justify-between gap-6">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-outline font-serif text-3xl italic md:text-4xl">{s.number}</span>
                  <h3 className="font-serif font-semibold text-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:text-green md:text-4xl">
                    {s.title}
                  </h3>
                </div>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:block">
                  {s.meta}
                </span>
              </div>

              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-6 pt-6 md:flex-row md:items-end md:justify-between md:pl-16">
                    <p className="max-w-xl leading-[1.8] text-muted">{s.cure}</p>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-green">
                      {s.liveLabel} <Arrow />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}