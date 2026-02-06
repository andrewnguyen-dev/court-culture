import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/next';
import Script from "next/script";

// Add URLs for favicon files stored in the `app` directory
const iconSvg = new URL("./icon0.svg", import.meta.url).toString();
const iconPng = new URL("./icon1.png", import.meta.url).toString();
const faviconIco = new URL("./favicon.ico", import.meta.url).toString();
const appleIcon = new URL("./apple-icon.png", import.meta.url).toString();
const appManifest = new URL("./manifest.json", import.meta.url).toString();

const primaryDomain = "https://www.courtculture.com.au";
const secondaryDomain = "https://www.courtculture.au";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Variable.woff2",
    }
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    }
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(primaryDomain),
  title: {
    default: "Court Culture",
    template: "%s | Court Culture",
  },
  description: "We design, build, and operate Sports & Recreation Facilities that transform underused spaces into vibrant destinations for sport, wellness, and community connection.",
  keywords: [
    "sports facility design",
    "sports facility construction",
    "recreation facility operations",
    "community wellness spaces",
    "sport venue management",
  ],
  category: "sports",
  alternates: {
    canonical: "/",
    languages: {
      "x-default": primaryDomain,
      "en-AU": secondaryDomain,
    },
  },
  openGraph: {
    type: "website",
    url: primaryDomain,
    title: "Court Culture",
    description: "We design, build, and operate Sports & Recreation Facilities that transform underused spaces into vibrant destinations for sport, wellness, and community connection.",
    siteName: "Court Culture",
    locale: "en_AU",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Court Culture logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Court Culture",
    description: "We design, build, and operate Sports & Recreation Facilities that transform underused spaces into vibrant destinations for sport, wellness, and community connection.",
    images: ["/og_image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
  manifest: appManifest,
  icons: {
    icon: [
      { url: iconSvg, type: "image/svg+xml" },
      { url: iconPng, type: "image/png", sizes: "32x32" },
      { url: faviconIco },
    ],
    apple: [{ url: appleIcon }],
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable} ${satoshi.variable} antialiased`}
      >
        <NavBar />
        <main className="pt-16">
          {children}
          <Analytics />
        </main>
        <Footer />
        <Script src="https://web3forms.com/client/script.js" async defer/>
      </body>
    </html>
  );
}
