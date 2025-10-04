"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export function HeroSection() {
  const t = useTranslations("HeroSection");

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <section id="home">
      <div className="min-h-screen">
        <ScrollExpandMedia
          mediaType="video"
          mediaSrc="https://cdn.pixabay.com/video/2024/12/15/246688_large.mp4"
          bgImageSrc="/images/backgroud-herosection.jpg"
          title={t("title")}
          date={t("subtitle")}
          scrollToExpand={t("scrollToExpand")}
          textBlend={false}
        ></ScrollExpandMedia>
      </div>
    </section>
  );
}
