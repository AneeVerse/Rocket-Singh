// app/layout.js (or app/layout.tsx if using TypeScript)

import { Poppins } from "next/font/google"; // Import Poppins from Google Fonts
import "./globals.css"; // Global CSS (ensure font-family settings if needed)
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Script from "next/script";

// Configure Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  metadataBase: new URL('https://www.urgentpassportvisa.com'),
  title: {
    default: "Expert Tatkaal passport processing and visa assistance in Navi Mumbai | Rocket Singh",
    template: "%s | Rocket Singh"
  },
  description: "Rocket Singh Passport Consultancy - Professional visa and passport services including Fresh Passport, Tatkal Passport, Lost Passport, and Fast Track Immigration services. Get your passport in 1–3 days.",
  keywords: [
    "Tatkaal passport service Navi Mumbai",
    "urgent passport renewal Mumbai",
    "lost passport assistance Navi Mumbai",
    "Tatkaal passport eligibility documents",
    "how long does Tatkaal passport take",
    "normal vs Tatkaal passport timeline India",
    "Rocket Singh Passport",
    "Visa assistance Navi Mumbai"
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/favicon.ico", // Default favicon
    apple: "/apple-touch-icon.png", // Apple touch icon
    other: [
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: 'Expert Tatkaal passport processing and visa assistance in Navi Mumbai',
    description: 'Professional visa and passport services including Fresh Passport, Tatkal Passport, Lost Passport, and Fast Track Immigration services.',
    url: 'https://www.urgentpassportvisa.com',
    siteName: 'Rocket Singh Passport Consultancy',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/apple-touch-icon.png', width: 180, height: 180, alt: 'Rocket Singh Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Tatkaal passport processing and visa assistance in Navi Mumbai',
    description: 'Professional visa and passport services - get your passport in 1–3 days.',
    images: ['/apple-touch-icon.png'],
  },
};

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rocket Singh Enterprises",
    "description": "Professional visa and passport services including Fresh Passport, Tatkal Passport, Lost Passport, and Fast Track Immigration services.",
    "url": "https://www.urgentpassportvisa.com",
    "logo": "https://www.urgentpassportvisa.com/apple-touch-icon.png",
    "telephone": "+91 7021388625",
    "email": "rocketsinghentps@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No - 116, First Floor, Seawoods Corner CHS LTD., Plot No. 19/A, Sec 25, Nerul (E)",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400706",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://facebook.com",
      "https://instagram.com",
      "https://linkedin.com"
    ],
    "openingHours": "Mo-Sa 09:00-19:00"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rocket Singh Passport Consultancy",
    "url": "https://www.urgentpassportvisa.com"
  };

  // Restoration of UI logic
  let isFastTrack = false;
  if (typeof window !== 'undefined') {
    isFastTrack = window.location.pathname.startsWith('/fasttrack');
  } else if (typeof global !== 'undefined' && global.process && global.process.env && global.process.env.NEXT_PUBLIC_PATHNAME) {
    isFastTrack = global.process.env.NEXT_PUBLIC_PATHNAME.startsWith('/fasttrack');
  }

  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans ${isFastTrack ? 'bg-gradient-to-br from-red-100 via-red-50 to-white' : ''}`}>
        <Header transparent={isFastTrack} />
        <main className={isFastTrack ? '' : 'bg-white min-h-screen'}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
