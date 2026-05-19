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

const SITE_URL = "https://yourdomain.com"; // replace with your real domain

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

  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "VendAxis",
    description:
      "VendAxis is a digital studio engineering apps, websites, automations and brand systems",
    url: SITE_URL,
    siteName: "VendAxis",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "VendAxis",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VendAxis",
    description:
      "VendAxis is a digital studio engineering apps, websites, automations and brand systems",
    images: ["/icon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        {/* Favicon */}
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* Extra OG Tags */}
        <meta property="og:image" content={`${SITE_URL}/icon.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VendAxis" />

        {/* Twitter */}
        <meta name="twitter:image" content={`${SITE_URL}/icon.png`} />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

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