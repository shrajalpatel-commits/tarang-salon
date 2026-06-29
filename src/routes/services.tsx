import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | TARANG Beauty Lounge" },
      { name: "description", content: "Curated clinical beauty experiences — skin, laser, hair design and signature bridal packages." },
      { property: "og:title", content: "Services | TARANG Beauty Lounge" },
      { property: "og:description", content: "Curated clinical beauty experiences — skin, laser, hair design and signature bridal packages." },
      { property: "og:image", content: IMG.svc1 },
    ],
  }),
  component: ServicesPage,
});

const skinCards = [
  { tag: "LASER", price: "500rs", title: "Pico Genesis Laser", sub: "Revolutionary pigment removal and skin revitalization with zero downtime.", time: "45 Mins", cadence: "3-5 Sessions", img: IMG.svc1 },
  { tag: "FACIAL", price: "400rs", title: "Hydra-Infusion Max", sub: "Multistep vortex technology cleanses, exfoliates, and hydrates for instant radiance.", time: "60 Mins", cadence: "Monthly", img: IMG.svc2 },
  { tag: "PEEL", price: "500", title: "Bio-Active Resurfacing", sub: "A customized chemical peel targeting acne scars, texture, and fine lines.", time: "45 Mins", cadence: "2-4 Sessions", img: IMG.svc3 },
];

const hairList = [
  { n: "01", title: "Balayage & Dimensional Color", price: "From 600rs" },
  { n: "02", title: "Precision Couture Cutting", price: "From 200rs" },
  { n: "03", title: "Silk Smooth Keratin Therapy", price: "From 300rs" },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      {/* ⚠️ overflow-x-hidden added here to physically block horizontal scrolling on mobile */}
      <main className="flex-1 relative overflow-x-hidden">
        
        {/* Hero */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-28 text-center max-w-[1400px] mx-auto">
          <span className="bg-secondary-container text-on-surface px-4 py-1.5 rounded-full text-[10px] md:text-[11px] tracking-[0.25em] uppercase mb-4 md:mb-6 inline-block font-semibold">
            Our Offerings
          </span>
          {/* Typography scaled down for mobile */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight">
            Curated Clinical <br />
            <span className="text-primary italic font-light">Beauty Experiences</span>
          </h1>
          <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto px-2 md:px-0">
            Discover a spectrum of transformative treatments where medical-grade precision meets the warmth of luxury care. Every service is a bespoke journey toward your most confident self.
          </p>
        </section>

        {/* Advanced Medical Skin Clinic */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-16 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.25em] text-[10px] mb-2 block">Dermatological Excellence</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Advanced Medical Skin Clinic</h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-on-surface-variant">
              Utilizing state-of-the-art diagnostic technology and clinical-grade actives to restore skin health from within.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skinCards.map((c) => (
              <div key={c.title} className="bg-surface-container border border-outline-variant/30 rounded-2xl md:rounded-3xl overflow-hidden hover:border-primary/40 transition-colors group">
                <div className="h-56 md:h-64 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Padding reduced slightly for mobile */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-secondary text-white px-3 py-1 rounded text-[10px] font-bold tracking-widest">{c.tag}</span>
                    <span className="font-bold text-xl md:text-2xl">{c.price}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{c.title}</h3>
                  <p className="text-sm md:text-base text-on-surface-variant mb-6">{c.sub}</p>
                  <div className="flex flex-wrap items-center gap-4 text-outline text-xs mb-6 pb-6 border-b border-outline-variant/20">
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {c.time}</div>
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">sync</span> {c.cadence}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full bg-primary text-white rounded-full py-3 md:py-3.5 flex justify-center items-center gap-2 hover:opacity-90 transition-all text-sm font-semibold"
                  >
                    Schedule Now <span className="material-symbols-outlined text-sm">calendar_today</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hair Design */}
        <section className="bg-surface-container-low px-4 sm:px-6 md:px-12 py-16 md:py-24 mt-8 md:mt-0">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2 relative px-2 md:px-0">
              {/* Background circle scaled down on mobile to prevent overflow */}
              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-24 h-24 md:w-40 md:h-40 border border-primary/20 rounded-full" />
              <img src={IMG.hair} alt="Fashion editorial showing voluminous, healthy styled hair reflecting advanced haircare" className="rounded-2xl md:rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl relative z-10" />
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] mb-4 inline-block font-bold tracking-widest">ARTISTRY</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Hair Design & <br className="hidden md:block" /> Transformations</h2>
              <p className="text-sm md:text-lg text-on-surface-variant mb-6 md:mb-8">
                From couture cuts to dimensional color transformations, our master stylists blend technical precision with artistic vision to reveal your unique identity.
              </p>
              <div className="space-y-2">
                {hairList.map((h) => (
                  <div key={h.n} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-outline-variant/40 hover:translate-x-2 transition-transform cursor-pointer group gap-2 sm:gap-0">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-2xl md:text-3xl font-bold text-primary opacity-20">{h.n}</span>
                      <span className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors">{h.title}</span>
                    </div>
                    <span className="font-bold text-base md:text-lg pl-9 sm:pl-0">{h.price}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                // Button made full width on mobile for easier tapping
                className="mt-8 md:mt-10 flex md:inline-flex justify-center bg-primary text-white rounded-full px-6 py-3.5 md:px-8 md:py-4 items-center gap-3 hover:shadow-xl hover:shadow-primary/20 transition-all text-sm font-semibold w-full md:w-auto"
              >
                Book Your Transformation <span className="material-symbols-outlined text-[16px] md:text-[20px]">north_east</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Bridal */}
        <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Signature Bridal & Aesthetic Styling</h2>
            <div className="w-16 md:w-24 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-8 bg-surface-container rounded-[24px] md:rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 border border-outline-variant/20 hover:shadow-lg transition-all">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="text-secondary font-bold text-[10px] md:text-xs tracking-[0.25em] mb-2 block">THE JOURNEY</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Bridal Glow Protocol</h3>
                <p className="text-sm md:text-base text-on-surface-variant mb-6">
                  A 3-month comprehensive preparation covering skin health, hair rejuvenation, and the final aesthetic reveal for your special day.
                </p>
                {/* Buttons converted to column flex on mobile, row on desktop */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-primary text-white rounded-full px-6 py-3 md:py-2.5 text-sm font-semibold w-full sm:w-auto">View Package</button>
                  <button className="border border-outline rounded-full px-6 py-3 md:py-2.5 text-sm font-semibold hover:bg-surface-container-high transition-colors w-full sm:w-auto">Consultations</button>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img src={IMG.bridal} alt="Complete 6-month pre-wedding bridal grooming and skincare timeline" className="rounded-2xl w-full aspect-square object-cover" />
              </div>
            </div>
            <div className="md:col-span-4 bg-tertiary-fixed rounded-[24px] md:rounded-3xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden border border-outline-variant/20 group hover:bg-tertiary-fixed-dim transition-colors">
              <div>
                <span className="text-on-tertiary-fixed font-bold text-[10px] md:text-xs tracking-[0.25em] mb-2 block">QUICK GLOW</span>
                <h3 className="text-xl md:text-2xl font-bold text-on-tertiary-fixed mb-3 md:mb-4">Event Ready Aesthetic</h3>
              </div>
              <p className="text-sm md:text-base text-on-tertiary-fixed-variant mb-8">
                Makeup and hair styling designed to last through any celebration, tailored to your features.
              </p>
              <div className="flex justify-between items-end">
                <span className="font-bold text-xl md:text-2xl text-on-tertiary-fixed">3000rs</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-on-tertiary-fixed text-tertiary-fixed flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-sm md:text-base">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 md:px-12 pb-16 md:pb-24 text-center">
          <div className="bg-primary-container text-on-surface rounded-[32px] md:rounded-[40px] p-8 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 relative z-10">Unsure where to start?</h2>
            <p className="text-sm md:text-lg mb-8 md:mb-10 max-w-xl mx-auto opacity-90 relative z-10">
              Book a comprehensive 3D Skin Analysis & Consultation with our lead clinical therapist to map your journey.
            </p>
            <Link
              to="/contact"
              // Full width button for easier tapping on mobile
              className="flex md:inline-flex justify-center bg-background text-primary rounded-full px-8 py-4 md:px-12 md:py-5 text-base md:text-lg font-bold hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-black/10 w-full md:w-auto"
            >
              Begin Your Analysis
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}