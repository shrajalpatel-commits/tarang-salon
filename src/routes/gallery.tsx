import { createFileRoute } from '@tanstack/react-router';
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute('/gallery')({
  component: GalleryRouteComponent,
})

const generateImages = (category: string) => {
  return Array.from({ length: 14 }).map(
    (_, index) => `/images/gallery/${category}/${index + 1}.jpg`
  );
};

const galleryData = [
  { title: "HAIR", images: generateImages("hair") },
  { title: "MAKEUP", images: generateImages("makeup") },
  { title: "NAIL", images: generateImages("nail") },
  { title: "SKIN TREATMENT", images: generateImages("skin") },
];

// Instead of forcing aspect ratios, we set different relative heights.
// The widths will calculate automatically based on the original image files.
const heightScales = [
  "h-[75%]", 
  "h-[95%]",
];

const GalleryRow = ({ title, images }: { title: string; images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-8 md:py-12 lg:py-16 overflow-hidden w-full relative border-b border-border/40 last:border-0">
      <div className="container mx-auto px-4 mb-6 md:mb-8">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Scaled down text and padding for mobile to ensure long titles like "SKIN TREATMENT" fit */}
          <h2 className="bg-primary text-white px-5 py-2 md:px-8 md:py-3 rounded-full text-xs sm:text-sm md:text-xl font-semibold tracking-[0.2em] uppercase">
            {title}
          </h2>
        
          <div className="h-[2px] w-12 md:w-20 bg-primary/30" />
        </div>
      </div>

      <div className="w-full overflow-visible relative">
        <div
          // Adjusted min-height for mobile screens to prevent them from taking up too much vertical space
          className="flex w-max items-center gap-3 md:gap-8 px-4 animate-gallery-scroll h-[30vh] md:h-[45vh] min-h-[200px] md:min-h-[250px] max-h-[550px]"
          style={{ animationPlayState: activeIndex !== null ? "paused" : "running" }}
        >
          {duplicatedImages.map((src, index) => {
            const heightClass = heightScales[index % heightScales.length];
            
            const isPaused = activeIndex !== null;
            const isActive = activeIndex === index;
            const isOther = isPaused && !isActive;

            return (
              <div
                key={`${title}-${index}`}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`
                  relative flex-shrink-0 cursor-pointer transition-all duration-700 ease-out
                  /* We let the width be auto, and apply the staggered height */
                  w-auto ${heightClass}
                  
                  /* Zoom effects - slightly reduced mobile scale so it doesn't break boundaries */
                  ${isActive ? "scale-105 md:scale-125 z-20" : "z-10"}
                  ${isOther ? "scale-90 opacity-60 z-0 grayscale-[20%]" : ""}
                  ${!isPaused ? "hover:scale-105" : ""}
                `}
              >
                <img
                  src={src}
                  alt={`${title} gallery photo ${index + 1}`}
                  // 'max-w-none' is crucial here so Tailwind doesn't force a 100% max-width, allowing natural aspect ratios
                  className="h-full w-auto max-w-none transition-all duration-700 border border-outline-variant/50 rounded-md md:rounded-none"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

function GalleryRouteComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteNav />
      
      {/* ⚠️ overflow-x-hidden absolutely locks the mobile viewport from side-scrolling */}
      <main className="flex-grow pt-16 md:pt-24 pb-12 overflow-x-hidden">
        <div className="container mx-auto px-4 mb-10 md:mb-16 text-center">
          <span className="text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold">
            TARANG GALLERY
          </span>
        
          {/* Scaled main heading to prevent word-break layout issues on small phones */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display mt-3 md:mt-4 mb-4 md:mb-6 leading-tight">
            Transformations That
            <span className="block text-primary italic font-light">
              Speak For Themselves
            </span>
          </h1>
        
          {/* Added horizontal padding for mobile readability */}
          <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto px-2 md:px-0">
            Discover real results, elegant styling, and confidence-enhancing treatments
            delivered by our expert team since 2012.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-0">
          {galleryData.map((section) => (
            <GalleryRow 
              key={section.title} 
              title={section.title} 
              images={section.images} 
            />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}