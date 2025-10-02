"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import homestayData from "@/data/homestay-data";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-background z-40 bg-[url('/images/bg-tes.svg')] bg-cover"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Guests Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Real experiences from travelers who have stayed with our host families around the world
          </p>
        </motion.div>
        <AnimatedTestimonials testimonials={homestayData.testimonials} />
      </div>
    </section>
  );
}
