"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import homestayData from "@/data/homestay-data";
import formConfig from "@/data/form-config";

export function FooterSection() {
  const t = useTranslations("FooterSection");
  const contactItems = t.raw("contact.items") as {
    title: string;
  }[];
  const days = t.raw("contact.businessHours.days") as {
    name: string;
    hours: string;
  }[];

  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const googleForm = new FormData();

      googleForm.append(formConfig.entryIds.name, formData.name);
      googleForm.append(formConfig.entryIds.email, formData.email);
      googleForm.append(formConfig.entryIds.message, formData.message);

      await fetch(formConfig.submitUrl, {
        method: "POST",
        body: googleForm,
        mode: "no-cors",
      });

      alert(t("form.messages.success"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Lỗi gửi form:", error);
      alert(t("form.messages.error"));
    }
  };

  return (
    <footer id="contact" ref={sectionRef} className="bg-background border-t border-border">
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">{t("contact.title")}</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: contactItems[0],
                    content: homestayData.contact.email,
                    href: `mailto:${homestayData.contact.email}`,
                  },
                  {
                    icon: Phone,
                    title: contactItems[1],
                    content: homestayData.contact.phone,
                    href: `tel:${homestayData.contact.phone}`,
                  },
                  {
                    icon: MapPin,
                    title: contactItems[2],
                    content: homestayData.contact.address,
                    href: "#",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {contactItems[index].title}
                      </h4>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 p-6 bg-muted/50 rounded-xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-foreground">
                    {t("contact.businessHours.title")}
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {[
                    {
                      name: days[0].name,
                      hours: days[0].hours,
                    },
                    {
                      name: days[1].name,
                      hours: days[1].hours,
                    },
                    {
                      name: days[2].name,
                      hours: days[2].hours,
                    },
                  ].map((day, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{day.name}</span>
                      <span>{day.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">{t("form.title")}</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t("form.labels.name")}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t("form.placeholders.name")}
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t("form.labels.email")}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t("form.placeholders.email")}
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t("form.labels.message")}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t("form.placeholders.message")}
                        className="w-full min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="lg"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        {t("form.submitButton")}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center space-x-2"
            >
              <a href="#">
                <img src="/images/logo.png" alt="" className="h-6 w-6" />
              </a>
              <span className="text-xl font-bold text-foreground">{t("bottom.logo")}</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center space-x-4"
            >
              {[
                { icon: Facebook, href: homestayData.contact.social.facebook },
                { icon: Instagram, href: homestayData.contact.social.instagram },
                { icon: Twitter, href: homestayData.contact.social.twitter },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground"
          >
            <p>{t("bottom.copyright", { year: new Date().getFullYear(), heart: "❤️" })}</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
