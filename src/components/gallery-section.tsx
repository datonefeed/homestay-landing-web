"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useTranslations } from "next-intl";

export function GallerySection() {
  const t = useTranslations("GallerySection");
  const gallery = t.raw("gallery") as {
    image: string;
    title: string;
    description: string;
  }[];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollX = useMotionValue(0);
  const ITEM_WIDTH = 280;
  const SPEED = 0.5;

  const extendedGallery = [...gallery, ...gallery, ...gallery];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationId: number;
    const animate = () => {
      scrollX.set(scrollX.get() - SPEED);

      if (scrollX.get() <= -extendedGallery.length * ITEM_WIDTH) {
        scrollX.set(0);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible, scrollX]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-[url('/images/bg-gallery.svg')] bg-cover"
    >
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <motion.div
          className="flex absolute top-0 left-0 h-full"
          style={{
            x: scrollX,
            width: `${extendedGallery.length * ITEM_WIDTH}px`,
          }}
        >
          {extendedGallery.map((item, index) => {
            const isEven = index % 2 === 0;
            const staggerOffset = isEven ? 0 : 120;

            return (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[240px] h-[380px] mx-5 rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  marginTop: `${staggerOffset}px`,
                }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center relative flex flex-col w-[400px] sm:w-[500px] md:[w-600px] lg:w-[700px]">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary leading-none tracking-tighter relative self-start z-10"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {t("explore")}
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary leading-none tracking-tighter self-end relative z-0 text-end"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {t("goodPlaces")}
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
