import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-tertiary-fixed-dim text-on-tertiary-fixed mt-12">
      {/* 2 columns on mobile, 5 columns on desktop. Padding adjusted from py-20 to py-12 on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 md:gap-10 px-6 md:px-12 py-12 md:py-20 max-w-[1400px] mx-auto">
        
        {/* Main Branding spans across both columns on mobile */}
        <div className="col-span-2">
          <div className="text-2xl font-extrabold tracking-tighter mb-4">TARANG</div>
          <p className="text-on-tertiary-fixed-variant max-w-sm text-sm leading-relaxed">
            Elevating beauty through the perfect harmony of science and nature since 2012.
          </p>
          <div className="flex gap-3 mt-6">
            {["alternate_email", "photo_camera", "share", "public"].map((i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-on-tertiary-fixed/20 flex items-center justify-center hover:bg-on-tertiary-fixed hover:text-tertiary-fixed-dim transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">{i}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Column (Sits cleanly side-by-side with Care on mobile) */}
        <div className="col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blog" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-on-tertiary-fixed-variant hover:text-primary-fixed hover:translate-x-1 inline-block transition-all"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Care Column */}
        <div className="col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Care</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-on-tertiary-fixed-variant hover:text-primary-fixed transition-all">Privacy Policy</a></li>
            <li><a href="#" className="text-on-tertiary-fixed-variant hover:text-primary-fixed transition-all">Terms of Service</a></li>
            <li><a href="#" className="text-on-tertiary-fixed-variant hover:text-primary-fixed transition-all">Patient Rights</a></li>
          </ul>
        </div>

        {/* Hours Column spans full width or drops cleanly on mobile */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Hours</h4>
          <div className="text-on-tertiary-fixed-variant text-sm space-y-1.5">
            <p>Mon – Fri: 9:00 – 19:00</p>
            <p>Sat: 10:00 – 18:00</p>
            <p>Sun: By Appointment</p>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-on-tertiary-fixed/10 px-6 md:px-12 py-6 md:py-8 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-on-tertiary-fixed-variant text-center md:text-left">
        <span>© 2024 TARANG Beauty Salon. All rights reserved.</span>
        <div className="flex gap-4 md:gap-6 opacity-75">
          <span>Designed with Precision</span>
          <span>Powered by Luxury</span>
        </div>
      </div>
    </footer>
  );
}