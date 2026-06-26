import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { IMG } from "@/lib/images";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TARANG | Beauty Lounge & Skin Clinic" },
      { name: "description", content: "Sanctuary of skin health and aesthetic mastery — clinical precision meets luxury since 2012." },
      { property: "og:title", content: "TARANG | Beauty Lounge & Skin Clinic" },
      { property: "og:description", content: "Sanctuary of skin health and aesthetic mastery — clinical precision meets luxury since 2012." },
      { property: "og:image", content: IMG.homeBride },
    ],
  }),
  component: HomePage,
});


// for trust metrics - start
function CountUp({
  end,
  startAnimation,
}: {
  end: number;
  startAnimation: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return <>{count}</>;
}
// for trust metrics - end


function HomePage() {


// for testimonial - start
  const testimonials = [
    {
      quote:
        "The bridal makeover exceeded everything I imagined. Every detail was flawless, and I felt absolutely radiant on my wedding day.",
      author: "Priya Sharma",
      role: "Bridal Client",
    },
    {
      quote:
        "Their skin treatments transformed my confidence. The team is knowledgeable, professional, and genuinely caring.",
      author: "Neha Verma",
      role: "Skin Care Client",
    },
    {
      quote:
        "From consultation to final results, the experience felt luxurious and personalized. I wouldn't trust anyone else.",
      author: "Ananya Gupta",
      role: "Beauty Enthusiast",
    },
    {
      quote:
        "The Hair Botox treatment brought my damaged hair back to life. The results were visible immediately.",
      author: "Riya Kapoor",
      role: "Hair Transformation Client",
    },
    {
      quote:
        "KARISHMA combines clinical expertise with warmth and hospitality. Every visit feels like a self-care retreat.",
      author: "Mehak Singh",
      role: "Regular Client",
    },
  ];
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
// for testimonial - end


// for feature grid - start
  const featureRef = useRef<HTMLElement | null>(null);
  const [featureVisible, setFeatureVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeatureVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // 30% visible
      }
    );
  
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
  
    return () => observer.disconnect();
  }, []);
// for feature grid - ends


// for trust metrics - start
  const metricsRef = useRef<HTMLElement | null>(null);
  const [animateMetrics, setAnimateMetrics] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateMetrics(true);
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: 0.3,
      }
    );
  
    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }
  
    return () => observer.disconnect();
  }, []);
  // for trust metrics - end

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="relative flex-1">
        {/* Hero */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-10 gap-10 items-center">
          <div className="md:col-span-4 relative order-2 md:order-1">
            <div className="relative z-10 border-[14px] border-white shadow-2xl rounded-sm overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={IMG.homeBride} alt="Traditional Indian bride showcasing flawless wedding makeup and elegant jewelry" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-6 w-44 h-44 bg-white/50 backdrop-blur-sm rounded-full p-2 z-20 border border-white">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-coral">
                <img src={IMG.homeFloral} alt="Modern luxury interior of Tarang Beauty Lounge in Bhopal" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="md:col-span-6 flex flex-col items-start gap-6 order-1 md:order-2">
            <span className="bg-brand-pink text-white px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em]">
              Welcome to TARANG
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] max-w-2xl">
              Where Precision <span className="text-primary italic font-light">Meets</span> Luxury.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl">
              Experience a sanctuary of skin health and aesthetic mastery. Our clinic blends scientific rigor with the warmth of a luxury lounge to reveal your most radiant self.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to="/contact"
                className="bg-brand-coral text-white rounded-full px-8 py-4 text-sm font-semibold flex items-center gap-2 hover:bg-primary transition-all shadow-xl shadow-brand-coral/30"
              >
                CONTACT US <span className="material-symbols-outlined text-[18px]">north_east</span>
              </Link>
              <Link
                to="/about"
                className="border-2 border-on-surface text-on-surface rounded-full px-8 py-4 text-sm font-semibold hover:bg-on-surface hover:text-white transition-all"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section ref={featureRef} className="bg-surface py-20 overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            {/* The Outer Container 
              I used a specific hex color to match your image exactly. 
              You can change this to `bg-brand-pink` if you want to strictly use your theme variables.
            */}
            <div className="bg-[#df5b8f] rounded-[40px] p-4 md:p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: "psychology", // Standard material symbol for the head/bulb
                    title: "Expert Hair\nStylists",
                    sub: "Master professionals specializing in Hair Botox, Keratin, and advanced hair transformations.",
                  },
                  {
                    icon: "psychology",
                    title: "Advanced Skin\nClinic",
                    sub: "Results-driven skin treatments and Face Botox tailored to your unique skin needs.",
                  },
                  {
                    icon: "workspace_premium", // Standard material symbol for a crown/ribbon
                    title: "Signature\nBridal Studio",
                    sub: "Feel like royalty on your special day with our expert bridal makeup and styling services.",
                  },
                ].map((c, index) => (
                  <div
                    key={c.title}
                    className="bg-white/10 border border-white/20 rounded-[32px] p-8 md:p-10 flex flex-col text-white transition-all duration-300 hover:bg-white/15"
                    // This applies the popIn animation and multiplies the delay by the index (0ms, 150ms, 300ms) for a staggered entrance
                    style={{animation: featureVisible ? `popIn 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) both ${index * 150}ms` : "none", opacity: featureVisible ? 1 : 0,}}
                  >
                    {/* White Icon Badge */}
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#191930] mb-8 shadow-sm">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {c.icon}
                      </span>
                    </div>
                    
                    {/* Text Content */}
                    {/* We use whitespace-pre-line so the \n in the title creates a line break just like the image */}
                    <h3 className="text-3xl md:text-4xl font-display font-normal leading-tight mb-5 tracking-wide whitespace-pre-line">
                      {c.title}
                    </h3>
                    <p className="opacity-90 leading-relaxed font-sans text-sm md:text-base">
                      {c.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services slider */}
        <section className="py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">
              <div>
                <span className="text-primary font-bold tracking-[0.25em] text-xs">CURATED SERVICES</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-3">TRANSFORMATIONS</h2>
              </div>
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-full border border-outline/30 flex items-center justify-center hover:bg-on-surface hover:text-white transition-all">
                  <span className="material-symbols-outlined">west</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-outline/30 flex items-center justify-center hover:bg-on-surface hover:text-white transition-all">
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: IMG.hydra, title: "HydraFacial Pro", sub: "Deep cleansing and hydration for instant luminous results." },
                { img: IMG.laser, title: "Laser Therapy", sub: "Targeted treatment for pigmentation and scar reduction." },
                { img: IMG.peel, title: "Chemical Peels", sub: "Medical-grade resurfacing for a smoother, youthful skin texture." },
              ].map((s) => (
                <div key={s.title} className="bg-brand-cream rounded-3xl overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-2">{s.title}</h4>
                    <p className="text-on-surface-variant mb-8">{s.sub}</p>
                    <Link
                      to="/contact"
                      className="inline-flex bg-white border border-brand-coral text-brand-coral px-5 py-2.5 rounded-full text-xs font-semibold items-center gap-2 group-hover:bg-brand-coral group-hover:text-white transition-all"
                    >
                      GET APPOINTMENT <span className="material-symbols-outlined text-[16px]">north_east</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Metrics */}
        <section
          ref={metricsRef}
          className="bg-primary text-white py-14 relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-80 h-80 border-[40px] border-white/5 rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 border-[20px] border-white/5 rounded-full" />
        
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              {
                title: "Years Of Experience",
                value: 14,
                suffix: "+",
                description:
                  "A legacy of beauty and skin expertise serving Bhopal since 2012.",
              },
              {
                title: "Treatments Delivered",
                value: 5000,
                suffix: "+",
                description:
                  "Over five thousand satisfied clients who trust us for their transformations.",
              },
              {
                title: "Awarded Specialists",
                value: 25,
                suffix: "+",
                description:
                  "Certified professionals dedicated to Hair Botox, Skin, and Bridal excellence.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center flex flex-col items-center"
              >
                <p className="uppercase tracking-[0.25em] text-sm font-semibold opacity-80 mb-4">
                  {item.title}
                </p>
        
                <div className="text-6xl md:text-7xl font-extrabold text-primary-fixed mb-5">
                  <CountUp
                    end={item.value}
                    startAnimation={animateMetrics}
                  />
                  {item.suffix}
                </div>
        
                <p className="max-w-xs text-white/80 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial
        <section className="py-24 bg-surface-container-high">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <span className="material-symbols-outlined text-6xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <p className="text-3xl md:text-4xl italic font-normal leading-tight max-w-4xl mx-auto">
              "The results from their advanced skin treatment exceeded all my expectations. My skin hasn't looked this radiant in years. It truly is the premier lounge for beauty."
            </p>
            <div className="mt-10">
              <span className="text-xs uppercase tracking-[0.25em] font-bold">Sophia Anderson</span>
              <span className="block text-on-surface-variant mt-1">Lifestyle Editor</span>
            </div>
          </div>
        </section> */}
        {/* Testimonial */}
        <section className="py-24 bg-surface-container-high">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        
            {/* Header Controls */}
            <div className="flex items-center justify-center gap-6 md:gap-12 mb-10">
        
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full border border-primary/20 bg-white shadow-sm flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="material-symbols-outlined">
                  arrow_back
                </span>
              </button>
        
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
        
                <span className="uppercase tracking-[0.3em] text-xs font-bold">
                  Testimonials
                </span>
              </div>
        
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full border border-primary/20 bg-white shadow-sm flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
        
            </div>
        
            {/* Quote */}
            <div
              key={currentTestimonial}
              className="animate-[fadeIn_0.5s_ease]"
            >
              <p className="text-2xl md:text-4xl italic font-normal leading-tight max-w-4xl mx-auto">
                "{testimonials[currentTestimonial].quote}"
              </p>
        
              <div className="mt-12">
                <span className="text-xs uppercase tracking-[0.25em] font-bold">
                  {testimonials[currentTestimonial].author}
                </span>
        
                <span className="block text-on-surface-variant mt-2">
                  {testimonials[currentTestimonial].role}
                </span>
              </div>
            </div>
        
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-primary scale-125"
                      : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        
        {/* Trusted Professional Brands */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Trusted Professional Brands
              </span>
        
              <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                Products We Trust For Every Transformation
              </h2>
        
              <p className="mt-4 text-on-surface-variant max-w-2xl mx-auto">
                We partner with globally recognized beauty and haircare brands to
                deliver safe, effective, and luxurious results.
              </p>
            </div>
        
            <div className="relative">
              {/* Fade Left */}
              <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        
              {/* Fade Right */}
              <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
        
              <div className="overflow-hidden">
                <div className="brand-marquee flex w-max gap-6">
                  {[
                    "L'Oréal Professionnel",
                    "Kérastase",
                    "Wella Professionals",
                    "Schwarzkopf",
                    "Matrix",
                    "Olaplex",
                    "RICA",
                    "O3+",
                    "L'Oréal Professionnel",
                    "Kérastase",
                    "Wella Professionals",
                    "Schwarzkopf",
                    "Matrix",
                    "Olaplex",
                    "RICA",
                    "O3+",
                  ].map((brand, index) => (
                    <div
                      key={index}
                      className="min-w-[260px] h-28 rounded-2xl border border-border bg-surface shadow-sm flex items-center justify-center px-8"
                    >
                      <span className="text-xl md:text-2xl font-bold tracking-wide text-on-surface">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Blog */}
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-12 gap-6">
            <h2 className="text-4xl md:text-5xl font-bold">Clinical Insights</h2>
            <Link to="/blog" className="text-primary font-bold pb-1 border-b-2 border-primary text-sm self-start md:self-auto">
              VIEW ALL BLOGS ↗
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: IMG.blogA, tag: "Skincare Tips", title: "The Science of Hydration: Morning Routines", sub: "Understanding how to maintain your glow between clinical sessions..." },
              { img: IMG.blogB, tag: "Bridal", title: "Mastering the Timeless Bridal Aesthetic", sub: "Why less is more when it comes to your most important day..." },
              { img: IMG.blogC, tag: "Hair Care", title: "Revitalizing Color-Treated Hair", sub: "New technologies in bonding and pigment protection for 2024..." },
            ].map((b) => (
              <article key={b.title} className="flex flex-col gap-5 group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <span className="text-xs text-brand-pink uppercase tracking-[0.2em] font-semibold">{b.tag}</span>
                  <h4 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors">{b.title}</h4>
                  <p className="text-on-surface-variant mt-3">{b.sub}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
