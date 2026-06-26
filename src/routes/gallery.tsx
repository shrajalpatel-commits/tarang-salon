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
    <section className="py-12 lg:py-16 overflow-hidden w-full relative border-b border-border/40 last:border-0">
      <div className="container mx-auto px-4 mb-6 md:mb-8">
        <div className="flex items-center gap-4">
          <h2 className="bg-primary text-white px-8 py-3 rounded-full text-lg md:text-xl font-semibold tracking-[0.2em] uppercase">
            {title}
          </h2>
        
          <div className="h-[2px] w-20 bg-primary/30" />
        </div>
      </div>

      <div className="w-full overflow-visible relative">
        <div
          // We constrain the overall row height. You can adjust the 40vh/50vh to make the row taller or shorter.
          className="flex w-max items-center gap-4 md:gap-8 px-4 animate-gallery-scroll h-[35vh] md:h-[45vh] min-h-[250px] max-h-[550px]"
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
                  
                  /* Zoom effects */
                  ${isActive ? "scale-110 md:scale-125 z-20" : "z-10"}
                  ${isOther ? "scale-90 opacity-60 z-0 grayscale-[20%]" : ""}
                  ${!isPaused ? "hover:scale-105" : ""}
                `}
              >
                <img
                  src={src}
                  alt={`${title} gallery photo ${index + 1}`}
                  // 'max-w-none' is crucial here so Tailwind doesn't force a 100% max-width, allowing natural aspect ratios
                  className="h-full w-auto max-w-none transition-all duration-700 border border-outline-variant/50"
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
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 mb-16 text-center">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">
            TARANG GALLERY
          </span>
        
          <h1 className="text-5xl md:text-6xl font-display mt-4 mb-6">
            Transformations That
            <span className="block text-primary italic font-light">
              Speak For Themselves
            </span>
          </h1>
        
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Discover real results, elegant styling, and confidence-enhancing treatments
            delivered by our expert team since 2012.
          </p>
        </div>

        <div className="flex flex-col">
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