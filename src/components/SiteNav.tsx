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
  return (
    <header className="bg-surface-container/80 backdrop-blur-md sticky top-0 z-50 w-full">
      <nav className="flex justify-between items-center w-full px-6 md:px-12 py-4 max-w-[1400px] mx-auto h-20">
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-on-surface">
            TARANG
          </span>
          <span className="text-[10px] tracking-[0.2em] font-bold text-primary uppercase mt-0.5">
            Beauty Lounge &amp; Skin Clinic
          </span>
        </Link>
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
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary hidden sm:inline">
            phone
          </span>
          <Link
            to="/contact"
            className="bg-primary text-white px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/20"
          >
            Let's Talk
            <span className="material-symbols-outlined text-[16px]">north_east</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
