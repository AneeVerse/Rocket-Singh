// app/layout.js (or app/layout.tsx if using TypeScript)

import { Poppins } from "next/font/google"; // Import Poppins from Google Fonts
import "./globals.css"; // Global CSS (ensure font-family settings if needed)

// Configure Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Rocket Singh",
  description: "Your description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
