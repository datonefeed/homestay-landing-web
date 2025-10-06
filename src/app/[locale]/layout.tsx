import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// ⚙️ Khai báo các locale cần build tĩnh
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 🚫 Ép Next.js render static, không dùng dynamic
export const dynamic = "force-static";
export const dynamicParams = false;

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // ❌ Không dùng notFound() vì static export không hỗ trợ
  if (!hasLocale(routing.locales, locale)) {
    return (
      <html>
        <body>
          <p>Invalid locale: {locale}</p>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
