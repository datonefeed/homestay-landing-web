// ✅ Thêm đoạn này ở đầu file
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

// Phần dưới vẫn giữ nguyên
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { GallerySection } from "@/components/gallery-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { FooterSection } from "@/components/footer-section";
import { HeaderSection } from "@/components/header-section";
import { FloatingContact } from "@/components/floating-contact";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeaderSection />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
      <FloatingContact
        facebookPageId="753011397903670"
        phoneNumber="+84123456789"
        email="contact@homestay.com"
        defaultMessage="Chào bạn! Tôi muốn tìm hiểu về homestay của bạn."
      />
    </main>
  );
}
