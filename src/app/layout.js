import { Geist, Geist_Mono } from "next/font/google";
import Loader from "@/components/Loader.js";
import CustomCursor from "@/components/CustomCursor.js";
import ClientScript from "@/components/ClientScript.js";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// IMPORTANT: no trailing slash
const SITE_URL = "https://vendaxis.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "VendAxis — Digital studio crafting the future of business",
    template: "%s | VendAxis",
  },

  description:
    "VendAxis is a digital studio engineering apps, websites, automations and brand systems",

  keywords: [
    "VendAxis",
    "web development",
    "app development",
    "automation",
    "branding",
    "digital studio",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "VendAxis — Digital studio crafting the future of business",
    description:
      "VendAxis is a digital studio engineering apps, websites, automations and brand systems",
    url: SITE_URL,
    siteName: "VendAxis",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/icon.png`,
        width: 1200,
        height: 630,
        alt: "VendAxis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VendAxis — Digital studio crafting the future of business",
    description:
      "VendAxis is a digital studio engineering apps, websites, automations and brand systems",
    images: [`${SITE_URL}/icon.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon only */}
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700;800;900&family=Archivo+Narrow:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Loader />
        <CustomCursor />
        <ClientScript />
        <SmoothScroll />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          strategy="beforeInteractive"
        />

        {children}
      </body>
    </html>
  );
}