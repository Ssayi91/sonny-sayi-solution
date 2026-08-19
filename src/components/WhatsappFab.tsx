"use client";
import { useState } from "react";

const WHATSAPP = "254736194051";

const WhatsAppIcon = () => (
  <svg className="relative h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [issue, setIssue] = useState("Network downtime");

  const compose = () => {
    const msg = `Hi Sonny, I'm ${name || "a business owner"}${business ? ` from ${business}` : ""}. We're struggling with: ${issue}. I'd like a workflow diagnostic.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const field =
    "mt-1 w-full border border-ink/15 bg-deep px-3 py-2 text-sm text-ink placeholder:text-muted/50 focus:border-green focus:outline-none";
  const label = "mt-4 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted";

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-4">
      {/* The diagnostic card */}
      {open && (
        <div className="w-72 border border-ink/15 bg-surface/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-md sm:w-80">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-green">Direct line</p>
          <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight">Begin the diagnostic.</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Tell me where it hurts. I'll open WhatsApp with your note ready to send.
          </p>

          <label className={label}>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />

          <label className={label}>Business</label>
          <input value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Your business" className={field} />

          <label className={label}>What's slowing you down?</label>
          <select value={issue} onChange={(e) => setIssue(e.target.value)} className={field}>
            <option>Network downtime</option>
            <option>Manual work & spreadsheets</option>
            <option>My website brings no clients</option>
            <option>Something else</option>
          </select>

          <button
            onClick={compose}
            className="mt-5 w-full bg-green py-3 text-sm font-semibold uppercase tracking-widest text-deep transition-colors hover:bg-green/90"
          >
            Open WhatsApp
          </button>
          <button onClick={() => setOpen(false)} className="mt-2 w-full text-center text-xs text-muted transition-colors hover:text-ink">
            Not now
          </button>
        </div>
      )}

      {/* The breathing button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-green/40 bg-deep/90 text-green shadow-[0_0_25px_rgba(34,197,94,0.25)] backdrop-blur-md transition-all hover:bg-green hover:text-deep"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-green/20 blur-md animate-breathe" />
        <WhatsAppIcon />
      </button>
    </div>
  );
}