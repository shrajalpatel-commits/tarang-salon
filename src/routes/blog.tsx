import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import confetti from "canvas-confetti"; 
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | TARANG Beauty Lounge" },
      { name: "description", content: "Clinical insights, bridal guides, hair trends and skincare hacks from the TARANG team." },
      { property: "og:title", content: "Blog | TARANG Beauty Lounge" },
      { property: "og:description", content: "Clinical insights, bridal guides, hair trends and skincare hacks from the TARANG team." },
      { property: "og:image", content: IMG.blogHero },
    ],
  }),
  component: BlogPage,
});

const filters = ["All Insights", "Skincare Hacks", "Bridal Guides", "Hair Trends", "Clinic News"];

const articles = [
  { img: IMG.blog1, tag: "SKINCARE HACKS", date: "October 12, 2023", title: "Morning Rituals: The Ideal Order of Skincare", sub: "Layering products correctly is just as important as the ingredients themselves. Learn how to maximize your serum absorption with our expert sequence." },
  { img: IMG.blog2, tag: "BRIDAL GUIDES", date: "September 28, 2023", title: "Bridal Glow Countdown: A 6-Month Roadmap", sub: "Preparing for your big day starts months in advance. From laser treatments to hydration therapy, here is your definitive schedule for radiance." },
  { img: IMG.blog3, tag: "HAIR TRENDS", date: "September 15, 2023", title: "Revitalizing Post-Summer Hair Damage", sub: "Sun, salt, and chlorine can leave locks brittle. We explore the latest keratin-bonding treatments and natural oil masks to restore strength." },
  { img: IMG.blog4, tag: "CLINIC NEWS", date: "August 30, 2023", title: "Introducing: Next-Gen AI Skin Analysis", sub: "We're bringing Silicon Valley technology to our clinic. Discover how our new AI-driven diagnostic tool creates a personalized treatment path." },
  { img: IMG.blog5, tag: "SKINCARE HACKS", date: "August 22, 2023", title: "The Power of Peptides in Daily Care", sub: "Peptides are the building blocks of the skin. Find out why these small molecules make a massive difference in elasticity and firmness over time." },
  { img: IMG.blog6, tag: "HAIR TRENDS", date: "August 05, 2023", title: "Autumn Color Palette: Warmth and Depth", sub: "As the seasons shift, so should your tone. Our master colorists share the most requested shades for the upcoming transition to cooler weather." },
];

function BlogPage() {
  const [active, setActive] = useState("All Insights");

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
      {/* ⚠️ overflow-x-hidden locks the viewport from side-scrolling on mobile */}
      <main className="flex-1 relative overflow-x-hidden">
        
        {/* Featured */}
        <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto mt-6 md:mt-12">
          {/* Height scaled down dynamically for mobile */}
          <div className="relative w-full h-[400px] sm:h-[450px] md:h-[600px] overflow-hidden rounded-[24px] md:rounded-2xl border border-outline-variant/30 group">
            <img src={IMG.blogHero} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/40 to-transparent" />
            {/* Reduced padding on mobile */}
            <div className="absolute bottom-0 left-0 p-6 md:p-16 max-w-3xl">
              <span className="bg-secondary text-white text-[10px] md:text-xs font-bold px-3 py-1 md:px-4 md:py-1 rounded-full mb-4 md:mb-6 inline-block tracking-widest">FEATURED STORY</span>
              {/* Typography perfectly scaled */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                The Science of Radiance: Why Cellular Health is the New Anti-Aging
              </h1>
              <p className="text-white/80 text-sm md:text-lg mb-6 md:mb-8 line-clamp-2 md:line-clamp-none">
                Discover how we bridge the gap between clinical dermatology and holistic wellness to unlock your skin's natural potential for luminescence.
              </p>
              <a href="#articles" className="inline-flex bg-primary text-white rounded-full px-5 py-3 md:px-6 items-center gap-2 text-xs md:text-sm font-semibold hover:opacity-90">
                Read Featured Article <span className="material-symbols-outlined text-[16px] md:text-[18px]">north_east</span>
              </a>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto mt-10 md:mt-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6 border-b border-outline-variant pb-6 md:pb-8">
            {/* Native horizontal scrolling enabled specifically for this menu on mobile */}
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide w-full lg:w-auto">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={
                    "px-4 md:px-5 py-2 rounded-full text-[11px] md:text-xs font-semibold whitespace-nowrap transition-all " +
                    (active === f
                      ? "bg-primary text-white"
                      : "bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-white")
                  }
                >
                  {f}
                </button>
              ))}
            </div>
            {/* Search bar scaled cleanly */}
            <div className="flex items-center gap-2 text-on-surface-variant w-full lg:w-auto bg-surface-container-low px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-[20px]">search</span>
              <input className="bg-transparent outline-none placeholder:text-on-surface-variant/70 text-sm w-full lg:w-48" placeholder="Search articles..." />
            </div>
          </div>
        </section>

        {/* Grid */}
        <section id="articles" className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto mt-8 md:mt-12 mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            {articles.map((a) => (
              <article key={a.title} className="group">
                <div className="relative overflow-hidden aspect-[4/5] mb-5 md:mb-6 border border-outline-variant/30 rounded-[20px] bg-surface-container">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-secondary text-white text-[9px] md:text-[10px] font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {a.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-[11px] md:text-xs mb-2 md:mb-3">
                  <span className="material-symbols-outlined text-[14px] md:text-[16px]">calendar_today</span>
                  {a.date}
                </div>
                {/* Title and paragraph scaled */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="text-sm md:text-base text-on-surface-variant mb-4 md:mb-5 line-clamp-3">{a.sub}</p>
                <a href="#" className="text-primary font-bold flex items-center gap-1 md:gap-2 hover:translate-x-1 transition-transform text-xs md:text-sm">
                  Read More <span className="material-symbols-outlined text-[16px] md:text-[18px]">north_east</span>
                </a>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 md:mt-20 flex justify-center items-center gap-4 md:gap-6">
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-outline flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <span className="text-xs md:text-sm text-on-surface">Page 01 of 08</span>
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-outline flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto mb-16 md:mb-24">
          {/* Added responsive padding and border radius */}
          <div className="bg-surface-container rounded-[24px] md:rounded-3xl p-6 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 border border-outline-variant/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full -mr-16 -mt-16 md:-mr-20 md:-mt-20 blur-2xl md:blur-3xl" />
            
            <div className="z-10 text-center md:text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Join Our Exclusive Circle</h2>
              <p className="text-sm md:text-lg text-on-surface-variant">
                Get first access to clinical breakthroughs, luxury skincare secrets, and priority booking for seasonal events.
              </p>
            </div>

            <div className="z-10 w-full md:w-auto">
              {/* Force stack column on mobile, row on desktop */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  placeholder="Email Address"
                  // Full width on mobile for better touch targets
                  className="bg-surface-container-high border-none rounded-full px-6 md:px-8 py-3.5 md:py-4 w-full md:w-80 outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 text-sm"
                />
                <button 
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`
                    w-full sm:w-auto text-white rounded-full px-6 py-3.5 md:py-4 text-sm font-semibold flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-500
                    ${status === "success" ? "bg-outline shadow-lg scale-105" : "bg-primary hover:opacity-90"}
                    ${status === "loading" ? "opacity-50 cursor-wait" : ""}
                  `}
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Subscribed! 🎉"
                  ) : (
                    <>Subscribe Now <span className="material-symbols-outlined text-[16px] md:text-[18px]">mail</span></>
                  )}
                </button>
              </form>
              
              {status === "error" && (
                <p className="text-red-500 text-xs md:text-sm mt-3 text-center md:text-left">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}