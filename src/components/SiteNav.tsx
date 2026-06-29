import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-surface-container/80 backdrop-blur-md sticky top-0 z-50 w-full">
      <nav className="flex justify-between items-center w-full px-4 md:px-12 py-4 max-w-[1400px] mx-auto h-20 relative">
        
        {/* Brand/Logo Layout */}
        <Link to="/" className="flex flex-col leading-none z-50">
          <span className="text-xl md:text-3xl font-extrabold tracking-tighter text-on-surface">
            TARANG
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-primary uppercase mt-0.5">
            Beauty Lounge &amp; Skin Clinic
          </span>
        </Link>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={
                  active
                    ? "text-primary font-bold border-b-2 border-primary pb-1 text-sm"
                    : "text-on-surface-variant hover:text-primary transition-colors text-sm"
                }
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle Controls */}
        <div className="flex items-center gap-2 sm:gap-4 z-50">
          <span className="material-symbols-outlined text-primary hidden sm:inline">
            phone
          </span>
          <Link
            to="/contact"
            className="bg-primary text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/20"
          >
            Let's Talk
            <span className="material-symbols-outlined text-[14px] sm:text-[16px]">north_east</span>
          </Link>

          {/* 3-Bar Hamburger / Close Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden p-2 text-on-surface focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[28px] transition-all duration-200">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Interactive Mobile Menu Drawer Panel */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-surface-container border-b border-outline/10 flex flex-col p-6 gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-5 duration-200 z-40">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setIsOpen(false)} // Auto-closes panel when a link is clicked
                  className={
                    active
                      ? "text-primary font-bold text-base py-1.5 border-l-4 border-primary pl-3 bg-primary/5 rounded-r-md"
                      : "text-on-surface-variant hover:text-primary transition-colors text-base py-1.5 pl-3"
                  }
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}