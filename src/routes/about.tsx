import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react"; 
import confetti from "canvas-confetti"; 
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | TARANG Beauty Lounge" },
      { name: "description", content: "A journey of precision. Bridging organic luxury and clinical efficacy since 2012." },
      { property: "og:title", content: "About Us | TARANG Beauty Lounge" },
      { property: "og:description", content: "A journey of precision. Bridging organic luxury and clinical efficacy since 2012." },
      { property: "og:image", content: IMG.aboutHeroBase },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const response = await fetch("https://assets.mailerlite.com/jsonp/2451026/forms/190484065923630864/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "fields[email]": email,
          "ml-submit": "1",
          "ajax": "1"
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); 

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ff7cbc', '#ab2e04', '#ee5d33'] 
        });

      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      {/* ⚠️ overflow-x-hidden locks the viewport on mobile */}
      <main className="flex-1 overflow-x-hidden">
        
        {/* Hero */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-28 overflow-hidden">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-6">
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.25em] mb-4 md:mb-6 inline-block font-semibold">
                Est. 2012
              </span>
              {/* Typography scaled for mobile (text-4xl) up to desktop (text-7xl) */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-8 leading-[1.1] md:leading-[0.98]">
                The Science of <br />
                <span className="text-primary italic font-light">Radiant Beauty</span>
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant max-w-lg">
                Founded on the principle that luxury and clinical precision should coexist, TARANG has been redefining the skincare landscape for over a decade.
              </p>
            </div>
            {/* Height scaled down dynamically on mobile to prevent massive stretching */}
            <div className="md:col-span-6 relative mt-10 md:mt-0 h-[350px] sm:h-[450px] md:h-[600px] w-full">
              <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-surface-container-high">
                <img src={IMG.aboutHeroBase} alt="Premium organic luxury skincare products used in our clinic" className="w-full h-full object-cover" />
              </div>
              <div className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4">
                <img src={IMG.aboutHeroOverlay} alt="Woman with radiant, dewy skin highlighting the results of our facial therapies" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Inception */}
        <section className="bg-surface-container px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">A Journey of Precision</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-on-surface-variant px-2">
              <p>In 2012, TARANG was born from a singular vision: to bridge the gap between organic luxury and clinical efficacy. We recognized that the modern individual seeks more than just a facial; they seek a transformative experience backed by science.</p>
              <p>Our commitment to clinical-grade organic products ensures that every treatment nourishes the skin at a cellular level while respecting the delicate balance of the body's natural ecosystem.</p>
            </div>
            <div className="mt-8 md:mt-12 flex justify-center gap-3 md:gap-4 items-center">
              <div className="h-px w-12 md:w-24 bg-outline" />
              <span className="text-xl md:text-2xl italic text-primary font-semibold">Est. 2012</span>
              <div className="h-px w-12 md:w-24 bg-outline" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-12 gap-4">
              <div>
                <span className="text-secondary text-[10px] md:text-xs uppercase tracking-[0.25em] mb-2 block font-semibold">Our Ethos</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Core Philosophy</h2>
              </div>
              <p className="text-sm md:text-base text-on-surface-variant max-w-sm">Driven by excellence, guided by nature, and delivered with uncompromising precision.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: "science", title: "Clinical Purity", body: "We utilize advanced dermatological protocols combined with 100% certified organic ingredients for maximum safety and efficacy." },
                { icon: "spa", title: "Holistic Wellness", body: "Our treatments address the root cause of skin concerns, promoting health from within rather than just treating surface symptoms." },
                { icon: "workspace_premium", title: "Expert Craft", body: "Every clinician at TARANG undergoes rigorous training in both traditional aesthetics and modern non-surgical procedures." },
              ].map((v) => (
                // Padding scaled down on mobile (p-6) vs desktop (p-10)
                <div key={v.title} className="bg-surface-container-low p-6 md:p-10 rounded-[24px] md:rounded-3xl border border-outline-variant hover:border-primary transition-all group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl md:text-3xl group-hover:text-white">{v.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{v.title}</h3>
                  <p className="text-sm md:text-base text-on-surface-variant">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="relative w-full h-[450px] md:h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={IMG.aboutBanner} alt="Expert team of clinical aestheticians and master stylists at our Arera Colony studio" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 md:via-background/40 to-transparent" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 md:px-12 w-full max-w-[1400px] mx-auto">
            <div className="max-w-xl">
              <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3 md:mb-4 block font-semibold">Advanced Aesthetics</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Experience Specialists</h2>
              <p className="text-sm md:text-lg text-on-surface-variant mb-6 md:mb-8 max-w-sm md:max-w-none">
                Our team specializes in non-invasive skin rejuvenation and advanced clinical aesthetics. We combine artistic intuition with surgical-level precision to enhance your natural features without downtime.
              </p>
              <Link to="/services" className="inline-flex justify-center w-full sm:w-auto bg-primary text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-semibold items-center gap-2 hover:opacity-90 transition-opacity">
                Explore Our Procedures <span className="material-symbols-outlined text-[16px] md:text-[18px]">north_east</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12">
          <div className="max-w-[600px] mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Join the Radiance</h3>
            <p className="text-sm md:text-base text-on-surface-variant mb-8">Stay updated with our latest clinical breakthroughs and exclusive wellness tips.</p>

            <form
              onSubmit={handleSubmit}
              // Inputs and buttons drop to column full-width on mobile, side-by-side on desktop
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                placeholder="Email Address"
                className="bg-surface-container-low border-b-2 border-outline-variant focus:border-primary px-6 py-3.5 md:py-3 outline-none w-full sm:max-w-xs disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`
                  w-full sm:w-auto text-white px-8 py-3.5 md:py-3 rounded-full text-sm font-semibold transition-all duration-500 min-w-[140px]
                  ${status === "success" ? "bg-outline shadow-lg scale-105" : "bg-secondary hover:opacity-90"}
                  ${status === "loading" ? "opacity-50 cursor-wait" : ""}
                `}
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Subscribed!" : "Subscribe"}
              </button>
            </form>

            {status === "error" && (
              <p className="text-red-500 text-sm mt-4">
                Oops! Something went wrong. Please try again.
              </p>
            )}

          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}