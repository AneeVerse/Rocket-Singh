// app/layout.js (or app/layout.tsx if using TypeScript)

import { Poppins } from "next/font/google"; // Import Poppins from Google Fonts
import "./globals.css"; // Global CSS (ensure font-family settings if needed)
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Expert Tatkaal passport processing and visa assistance in Navi Mumbai. Get your passport in 1–3 days. Verified reviews.",
  description: "Rocket Singh Passport Consultancy - Professional visa and passport services including Fresh Passport, Tatkal Passport, Lost Passport, and Fast Track Immigration services",
  keywords: [
    "Tatkaal passport service Navi Mumbai",
    "urgent passport renewal Mumbai",
    "lost passport assistance Navi Mumbai",
    "Tatkaal passport eligibility documents",
    "how long does Tatkaal passport take",
    "normal vs Tatkaal passport timeline India"
  ],
  icons: {
    icon: "/favicon.ico", // Default favicon
    apple: "/apple-touch-icon.png", // Apple touch icon
    other: [
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest", // Optional: Link to your manifest.json file
};

export default function RootLayout({ children, params }) {
  // Next.js passes params for dynamic routes, but for static routes, we can use the pathname from the URL
  // We'll use a workaround to check if the current path is /fasttrack
  let isFastTrack = false;
  if (typeof window !== 'undefined') {
    isFastTrack = window.location.pathname.startsWith('/fasttrack');
  } else if (typeof global !== 'undefined' && global.process && global.process.env && global.process.env.NEXT_PUBLIC_PATHNAME) {
    isFastTrack = global.process.env.NEXT_PUBLIC_PATHNAME.startsWith('/fasttrack');
  }
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans ${isFastTrack ? 'bg-gradient-to-br from-red-100 via-red-50 to-white' : ''}`}>
        <Header transparent={isFastTrack} />
        <main className={isFastTrack ? '' : 'bg-white min-h-screen'}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
