import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | TARANG Beauty Lounge" },
      { name: "description", content: "Visit our boutique clinic in the heart of Bhopal for a personalized consultation with our clinical specialists." },
      { property: "og:title", content: "Contact Us | TARANG Beauty Lounge" },
      { property: "og:description", content: "Visit our boutique clinic in the heart of Bhopal for a personalized consultation with our clinical specialists." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    const form = e.currentTarget;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxtj4NGFtxL5atjEsfBRAKX1zlz5uSMpJIUBncqis24NNB1_doLQF4NPqCZ_ncfva0mKA/exec", {
        method: "POST",
        mode: "no-cors", 
        body: new FormData(form),
      });

      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      {/* ⚠️ overflow-x-hidden strictly prevents the form/map from causing side-scrolling */}
      <main className="flex-1 relative overflow-x-hidden">
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-28">
          {/* Gap scaled down for mobile to prevent massive empty space */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Left Section */}
            <section>
              <span className="bg-secondary text-white text-[10px] md:text-xs px-3 py-1 rounded uppercase tracking-[0.25em] inline-block mb-4 md:mb-6 font-semibold">
                GET IN TOUCH
              </span>
              {/* Typography scaled down for mobile */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-[1.1] md:leading-[0.98]">
                Let's Start Your Skin Journey.
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant max-w-lg mb-8 md:mb-12">
                Visit our boutique clinic in the heart of Bhopal for a personalized consultation with our clinical specialists. Precision meets pampering.
              </p>

              {/* Spacing scaled for mobile */}
              <div className="space-y-6 md:space-y-10">
                {[
                  { icon: "location_on", title: "Clinical Studio", body: "124 Arera Colony, Near Bittan Market\nBhopal, MP 462016" },
                  { icon: "call", title: "Speak to Us", body: "+91 755 4230 000\n+91 989 3000 000" },
                  { icon: "mail", title: "Online Concierge", body: "hello@tarang.com\nbookings@tarang.com" },
                ].map((c) => (
                  <div key={c.title} className="group flex gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                      <span className="material-symbols-outlined text-[20px] md:text-[24px]">{c.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{c.title}</h3>
                      <p className="text-sm md:text-base text-on-surface-variant whitespace-pre-line">{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 md:mt-14 rounded-xl overflow-hidden grayscale contrast-125 border border-outline-variant h-40 md:h-48 w-full shadow-sm hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.2217230488581!2d77.46776054070745!3d23.2513175652992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43002820f33f%3A0x427ff0fda22e4b57!2sThakur%20Villa!5e0!3m2!1sen!2sin!4v1782465812682!5m2!1sen!2sin" 
                  className="w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </section>

            {/* Right Form Section */}
            <section>
              {/* Padding scaled down for mobile so form inputs have room to breathe */}
              <div className="bg-surface-container-lowest border border-outline-variant p-6 sm:p-8 md:p-12 rounded-[24px] md:rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-32 h-32 md:w-40 md:h-40 bg-secondary/10 blur-2xl md:blur-3xl rounded-full" />
                
                {/* Form gap scaling */}
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-7 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <Field label="FULL NAME" name="name" type="text" placeholder="Jane Doe" required />
                    <Field label="EMAIL ADDRESS" name="email" type="email" placeholder="jane@example.com" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <Field label="PHONE NUMBER" name="phone" type="tel" placeholder="+91 000 000 0000" required />
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-[10px] md:text-xs text-on-surface-variant ml-1 font-semibold tracking-widest">SERVICE INTEREST</label>
                      <select 
                        name="service" 
                        required 
                        className="w-full bg-surface p-3.5 md:p-4 text-sm md:text-base border-b-2 border-outline-variant focus:border-primary outline-none rounded-t-lg appearance-none"
                      >
                        <option value="">Select a Treatment</option>
                        <option value="Clinical Facial">Clinical Facial</option>
                        <option value="Laser Hair Removal">Laser Hair Removal</option>
                        <option value="Dermabrasion">Dermabrasion</option>
                        <option value="Chemical Peel">Chemical Peel</option>
                        <option value="Skin Consultation">Skin Consultation</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[10px] md:text-xs text-on-surface-variant ml-1 font-semibold tracking-widest">HOW CAN WE HELP?</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Share your skin concerns..."
                      className="w-full bg-surface p-3.5 md:p-4 text-sm md:text-base border-b-2 border-outline-variant focus:border-primary outline-none rounded-t-lg resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    className={
                      "w-full text-white py-4 md:py-5 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-2 group transition-all duration-300 " +
                      (status === "sent" ? "bg-green-600 shadow-lg scale-[1.02]" : status === "error" ? "bg-red-600" : "bg-primary hover:opacity-90") +
                      (status === "sending" ? " opacity-70 cursor-wait" : "")
                    }
                  >
                    {status === "sending" ? "Sending Request..." : 
                     status === "sent" ? "Message Sent ✓" : 
                     status === "error" ? "Error! Try Again" : 
                     "Send Message"}
                    {status === "idle" && (
                      <span className="material-symbols-outlined text-[18px] md:text-[24px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
                    )}
                  </button>
                  <p className="text-center text-[10px] md:text-xs text-on-surface-variant opacity-60 px-4">
                    By submitting, you agree to our privacy policy and terms of care.
                  </p>
                </form>
              </div>

              {/* Stack items on small mobile screens */}
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 p-5 md:p-6 bg-surface-container-high/40 rounded-xl border border-dashed border-outline text-center sm:text-left">
                <div className="flex -space-x-3 shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-surface overflow-hidden">
                    <img src={IMG.avatar1} alt="Portraits of happy clients who transformed their skin with our specialists" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-surface overflow-hidden">
                    <img src={IMG.avatar2} alt="Portraits of happy clients who transformed their skin with our specialists" className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Updated brand name here to match TARANG */}
                <p className="text-on-surface-variant italic text-sm md:text-base mt-1 sm:mt-0">
                  "Joined 5,000+ others who transformed their skin at TARANG."
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type, placeholder, required }: { label: string; name: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <div className="space-y-1.5 md:space-y-2">
      <label className="text-[10px] md:text-xs text-on-surface-variant ml-1 font-semibold tracking-widest">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-surface p-3.5 md:p-4 text-sm md:text-base border-b-2 border-outline-variant focus:border-primary outline-none rounded-t-lg"
      />
    </div>
  );
}