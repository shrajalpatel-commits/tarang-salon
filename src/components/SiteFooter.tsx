import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-tertiary-fixed-dim text-on-tertiary-fixed mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-6 md:px-12 py-20 max-w-[1400px] mx-auto">
        <div className="md:col-span-2">
          <div className="text-2xl font-extrabold tracking-tighter mb-6">TARANG</div>
          <p className="text-on-tertiary-fixed-variant max-w-sm">
            Elevating beauty through the perfect harmony of science and nature since 2012.
          </p>
          <div className="flex gap-3 mt-8">
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
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm">
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
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Care</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="text-on-tertiary-fixed-variant hover:text-primary-fixed transition-all">Privacy Policy</a></li>
            <li><a href="#" className="text-on-tertiary-fixed-variant hover:text-primary-fixed transition-all">Terms of Service</a></li>
            <li><a href="#" className="text-on-tertiary-fixed-variant hover:text-primary-fixed transition-all">Patient Rights</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Hours</h4>
          <div className="text-on-tertiary-fixed-variant text-sm space-y-2">
            <p>Mon – Fri: 9:00 – 19:00</p>
            <p>Sat: 10:00 – 18:00</p>
            <p>Sun: By Appointment</p>
          </div>
        </div>
      </div>
      <div className="border-t border-on-tertiary-fixed/10 px-6 md:px-12 py-8 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-tertiary-fixed-variant">
        <span>© 2024 TARANG Beauty Salon. All rights reserved.</span>
        <div className="flex gap-6">
          <span>Designed with Precision</span>
          <span>Powered by Luxury</span>
        </div>
      </div>
    </footer>
  );
}
