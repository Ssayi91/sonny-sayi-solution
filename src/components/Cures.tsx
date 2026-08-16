import Reveal from "./Reveal";

const cures = [
  {
    number: "01",
    tag: "Network & Infrastructure",
    title: "The Network Nobody Understands",
    caption: "Fig. 01 — The frayed cable bundle.",
    image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/f_auto,q_auto/v1786859643/frayed-cable-bundle_whifkh.png",
    alt: "Manga panel of a frayed network cable bundle in a server rack",
    story:
      "The internet keeps going down, and every time it does, someone calls the same technician. Nobody knows which cable goes where. One switch has been added on top of another. A cable runs across a ceiling because it was faster than doing it properly. When the business grows, the network becomes harder to manage, harder to troubleshoot, and more expensive to keep alive.",
    cure:
      "We redesign the infrastructure around how your business actually operates. Proper cabling, structured patching, managed networking, documentation and clear topology. When something breaks, you know where to look. When the business grows, the network grows with it.",
    link: "https://wa.me/254736194051?text=Hi%20Sonny,%20I%20read%20the%20network%20story.%20Our%20network%20has%20too%20many%20recurring%20problems.%20Let's%20talk.",
  },
  {
    number: "02",
    tag: "Custom Applications",
    title: "The Spreadsheet That Runs the Business",
    caption: "Fig. 02 — Friday-night reconciliation.",
    image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/f_auto,q_auto/v1786859643/friday-night-reconciliation-desk_b8vcz5.png",
    alt: "Manga panel of an exhausted administrator reconciling receipts late at night",
    story:
      "Orders arrive on WhatsApp. Receipts are sent as screenshots. Someone copies the numbers into Excel. Someone else checks them against a notebook. At the end of the week, the team spends hours finding what was missed, what was paid and what still needs to be followed up. The business is moving, but the people inside it are spending their time moving information from one place to another.",
    cure:
      "We turn the manual process into a system. Orders, customers, receipts, approvals, stock, commissions and reports live in one place. The system handles the repetitive work so your team can spend its time running the business instead of reconciling it.",
    link: "https://wa.me/254736194051?text=Hi%20Sonny,%20I%20read%20the%20spreadsheet%20story.%20We%20still%20run%20too%20much%20of%20our%20business%20manually.%20Let's%20talk.",
  },
  {
    number: "03",
    tag: "Web Platforms",
    title: "The Business That Disappears Online",
    caption: "Fig. 03 — The surgical showroom.",
    image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/f_auto,q_auto/v1786859644/surgical-showroom_d0gdmo.png",
    alt: "Manga panel of a medical supplies website presented as a digital showroom",
    story:
      "A potential client hears about your company and does what almost every serious buyer does next: they search for you. They find a website that looks forgotten, a Facebook page with old posts, or no useful product information at all. Your competitor has a proper catalogue, clear services and the information they need to make a decision. You may be better at what you do, but online, the buyer never gets far enough to find out.",
    cure:
      "We build the digital platform your sales process actually needs. Clear services, structured product catalogues, strong presentation, enquiry paths and information built for the people who buy from you. Your website stops being a digital business card and starts doing part of the selling.",
    link: "https://wa.me/254736194051?text=Hi%20Sonny,%20I%20read%20the%20business%20that%20disappears%20online%20story.%20I%20want%20my%20online%20presence%20to%20work%20harder%20for%20my%20business.%20Let's%20talk.",
  },
];

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default function Cures() {
  return (
    <section id="cures">
      <div className="border-b border-ink/10 px-6 py-16 md:px-16 md:py-24">
        <Reveal>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-green">Feature Stories</p>
          <h2 className="max-w-3xl font-serif font-semibold leading-[1.05] text-[clamp(2rem,5vw,4rem)]">
            What does your daily chaos look like?
          </h2>
          <p className="mt-6 max-w-xl leading-[1.8] text-muted">
            Three field reports from real businesses. If you recognize your own
            operation in any of them, the cure already exists.
          </p>
        </Reveal>
      </div>

      {cures.map((cure, i) => (
        <article key={cure.number} className="border-b border-ink/10">
          <div className="grid md:grid-cols-2">
            <div className={`flex items-center justify-center px-6 py-16 md:px-16 md:py-24 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <Reveal>
                <figure className="relative">
                  <div className="absolute -inset-4 bg-green/[0.06] blur-2xl" aria-hidden="true" />
                  <img
                    src={cure.image}
                    alt={cure.alt}
                    loading="lazy"
                    decoding="async"
                    className="relative w-64 border border-ink/20 shadow-[0_24px_70px_rgba(0,0,0,0.55)] md:w-80"
                  />
                  <figcaption className="mt-5 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                    <span>{cure.caption}</span>
                    <span className="text-outline font-serif text-2xl italic">{cure.number}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div className={`flex flex-col justify-center px-6 py-14 md:px-16 md:py-24 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <Reveal delay={120}>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-green">{cure.tag}</p>
                <h3 className="mb-8 font-serif font-semibold leading-tight text-3xl md:text-4xl">{cure.title}</h3>
                <p className="mb-10 max-w-md leading-[1.9] text-muted">{cure.story}</p>

                <div className="mb-10 border-l-2 border-green pl-6">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">The Cure</p>
                  <p className="max-w-md leading-[1.8]">{cure.cure}</p>
                </div>

                <a
                  href={cure.link}
                  target="_blank"
                  className="group flex w-fit items-center gap-2 border-b border-ink/30 pb-1 text-sm uppercase tracking-widest transition-colors hover:border-green hover:text-green"
                >
                  Is this your problem? <Arrow />
                </a>
              </Reveal>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}