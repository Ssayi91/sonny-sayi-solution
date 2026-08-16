"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Thin, elegant SVG icons (1.5px stroke)
const IconReport = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
);

const IconSystems = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
);

const IconJournal = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
);

const IconDiagnostic = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
);

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
);

const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Field Reports", href: "#cures", icon: <IconReport /> },
    { name: "Portfolio", href: "#proof", icon: <IconSystems /> },
    // { name: "The Journal", href: "#journal", icon: <IconJournal /> },
  ];

  return (
    <>
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? "bg-deep/90 backdrop-blur-md border-b border-ink/10" : "bg-transparent"}`}>
        <div className="flex items-center justify-between px-6 py-5 md:px-16">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dzyxm0rhg/image/upload/f_auto,q_auto/v1786694943/banner-removebg-preview_bkjzpn.png"
              alt="Sonny Sayi Solutions"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="hidden font-serif text-lg font-semibold tracking-tight md:block">
              Sonny Sayi <span className="text-green">Solutions</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            <a
              href="https://wa.me/254736194051?text=Hi%20Sonny,%20I%20think%20my%20business%20has%20a%20systems%20problem."
              target="_blank"
              className="flex items-center gap-2 border border-green/30 px-4 py-2 text-sm text-green transition-all hover:bg-green hover:text-deep"
            >
              <IconDiagnostic />
              <span>Diagnostic</span>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-ink md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 flex flex-col justify-center bg-deep px-8 transition-all duration-500 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <nav className="flex flex-col gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 border-b border-ink/10 pb-6 font-serif text-3xl font-semibold text-ink transition-colors hover:text-green"
            >
              <span className="text-muted">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
          <a
            href="https://wa.me/254736194051?text=Hi%20Sonny,%20I%20think%20my%20business%20has%20a%20systems%20problem."
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 flex items-center gap-4 text-2xl text-green"
          >
            <IconDiagnostic />
            <span>Begin Diagnostic</span>
          </a>
        </nav>
        
        <div className="absolute bottom-8 left-8 right-8 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          <span>Nairobi, KE</span>
          <span>Vol. 01</span>
        </div>
      </div>
    </>
  );
}