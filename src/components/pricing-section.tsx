"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import homestayData from "@/data/homestay-data";
import { p } from "framer-motion/client";

export function PricingSection() {
  const t = useTranslations("PricingSection");
  const pricing = t.raw("pricing") as {
    name: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
  }[];
  const items = t.raw("included.items") as {
    title: string;
  }[];
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
    <section id="pricing" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 50,
                scale: isVisible ? 1 : 0.9,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <Card
                className={`h-full relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular
                    ? "border-primary shadow-xl scale-105 bg-card"
                    : "border-border/50 hover:border-primary/20 hover:shadow-xl bg-card"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                      <Star className="inline h-4 w-4 mr-1" />
                      {t("mostPopular")}
                    </div>
                  </div>
                )}

                <CardHeader className={`text-center ${plan.popular ? "pt-16" : "pt-8"} pb-4`}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: isVisible ? 1 : 0,
                          x: isVisible ? 0 : -20,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + featureIndex * 0.1,
                        }}
                        className="flex items-center"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                {/* Hover Effect Background */}
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none ${
                    plan.popular
                      ? "bg-gradient-to-br from-primary/10 to-accent/10 group-hover:opacity-100"
                      : "bg-gradient-to-br from-primary/5 to-accent/5 hover:opacity-100"
                  }`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-4">{t("included.title")}</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🏠", title: items[0] },
                { icon: "🍳", title: items[1] },
                { icon: "📶", title: items[2] },
                { icon: "🗺️", title: items[3] },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.8,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1 + index * 0.1,
                  }}
                  className="text-center"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {items[index].title}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {t("included.freeCancellation")}
                </span>{" "}
                {t("included.cancellationPeriod")} •
                <span className="font-semibold text-foreground ml-1">
                  {t("included.noBookingFees")}
                </span>{" "}
                •<span className="font-semibold text-foreground ml-1">{t("included.support")}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
