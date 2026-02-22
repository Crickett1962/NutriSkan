import "./globals.css";
import type { Metadata } from "next";

const APP_NAME = "Food Label Scanner App | Skantastic";
const APP_DESC =
  "Scan food labels instantly and shop with confidence. Skantastic helps families understand ingredients and make smarter grocery choices.";
const SITE_URL = "https://skantastic.com";
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

// Replace once approved
const APP_STORE_URL = "https://apps.apple.com/app/idYOURAPPID";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: APP_NAME,
  description: APP_DESC,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Skantastic – Scan smarter. Shop confidently.",
    description: "Instantly scan food labels and get clear ingredient guidance for your family.",
    url: SITE_URL,
    siteName: "Skantastic",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Skantastic" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skantastic – Food Label Scanner",
    description: "Make confident grocery choices in seconds.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Skantastic",
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    description:
      "A food label scanner app that helps families understand ingredients and make confident grocery choices.",
    offers: {
      "@type": "Offer",
      price: "7.99",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="alternate" href={APP_STORE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
