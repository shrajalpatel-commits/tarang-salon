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
  // Fix 1: Added "error" to the list of allowed statuses
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    // Grab the raw form element
    const form = e.currentTarget;

    try {
      // We send the raw FormData, bypassing complex JSON security checks
      await fetch("https://script.google.com/macros/s/AKfycbxtj4NGFtxL5atjEsfBRAKX1zlz5uSMpJIUBncqis24NNB1_doLQF4NPqCZ_ncfva0mKA/exec", {
        method: "POST",
        mode: "no-cors", 
        body: new FormData(form), // <--- This is the magic change!
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
      <main className="flex-1 relative">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <section>
              <span className="bg-secondary text-white text-xs px-3 py-1 rounded uppercase tracking-[0.25em] inline-block mb-6 font-semibold">
                GET IN TOUCH
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[0.98]">
                Let's Start Your Skin Journey.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg mb-12">
                Visit our boutique clinic in the heart of Bhopal for a personalized consultation with our clinical specialists. Precision meets pampering.
              </p>

              <div className="space-y-10">
                {[
                  { icon: "location_on", title: "Clinical Studio", body: "124 Arera Colony, Near Bittan Market\nBhopal, MP 462016" },
                  { icon: "call", title: "Speak to Us", body: "+91 755 4230 000\n+91 989 3000 000" },
                  { icon: "mail", title: "Online Concierge", body: "hello@tarang.com\nbookings@tarang.com" },
                ].map((c) => (
                  <div key={c.title} className="group flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                      <span className="material-symbols-outlined">{c.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                      <p className="text-on-surface-variant whitespace-pre-line">{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-14 rounded-xl overflow-hidden grayscale contrast-125 border border-outline-variant h-48 w-full shadow-sm hover:grayscale-0 transition-all duration-500">
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

            {/* Right form */}
            <section>
              <div className="bg-surface-container-lowest border border-outline-variant p-8 md:p-12 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 blur-3xl rounded-full" />
                
                <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Fix 2: Added name="name" and name="email" to these fields */}
                    <Field label="FULL NAME" name="name" type="text" placeholder="Jane Doe" required />
                    <Field label="EMAIL ADDRESS" name="email" type="email" placeholder="jane@example.com" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Fix 2: Added name="phone" to this field */}
                    <Field label="PHONE NUMBER" name="phone" type="tel" placeholder="+91 000 000 0000" required />
                    <div className="space-y-2">
                      <label className="text-xs text-on-surface-variant ml-1 font-semibold tracking-widest">SERVICE INTEREST</label>
                      <select 
                        name="service" 
                        required 
                        className="w-full bg-surface p-4 border-b-2 border-outline-variant focus:border-primary outline-none rounded-t-lg appearance-none"
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
                  <div className="space-y-2">
                    <label className="text-xs text-on-surface-variant ml-1 font-semibold tracking-widest">HOW CAN WE HELP?</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Share your skin concerns..."
                      className="w-full bg-surface p-4 border-b-2 border-outline-variant focus:border-primary outline-none rounded-t-lg resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    className={
                      "w-full text-white py-5 rounded-full text-lg font-semibold flex items-center justify-center gap-2 group transition-all duration-300 " +
                      (status === "sent" ? "bg-green-600 shadow-lg scale-[1.02]" : status === "error" ? "bg-red-600" : "bg-primary hover:opacity-90") +
                      (status === "sending" ? " opacity-70 cursor-wait" : "")
                    }
                  >
                    {status === "sending" ? "Sending Request..." : 
                     status === "sent" ? "Message Sent ✓" : 
                     status === "error" ? "Error! Try Again" : 
                     "Send Message"}
                    {status === "idle" && (
                      <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
                    )}
                  </button>
                  <p className="text-center text-xs text-on-surface-variant opacity-60">
                    By submitting, you agree to our privacy policy and terms of care.
                  </p>
                </form>
              </div>

              <div className="mt-8 flex items-center gap-4 p-6 bg-surface-container-high/40 rounded-xl border border-dashed border-outline">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-surface overflow-hidden">
                    <img src={IMG.avatar1} alt="Portraits of happy clients who transformed their skin with our specialists" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-surface overflow-hidden">
                    <img src={IMG.avatar2} alt="Portraits of happy clients who transformed their skin with our specialists" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-on-surface-variant italic">
                  "Joined 5,000+ others who transformed their skin at Karishma."
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

// Ensure the Field component properly receives the new attributes
function Field({ label, name, type, placeholder, required }: { label: string; name: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="text-xs text-on-surface-variant ml-1 font-semibold tracking-widest">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-surface p-4 border-b-2 border-outline-variant focus:border-primary outline-none rounded-t-lg"
      />
    </div>
  );
}