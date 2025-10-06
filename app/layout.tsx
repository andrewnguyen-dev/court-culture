import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

// Add URLs for favicon files stored in the `app` directory
const iconSvg = new URL("./icon0.svg", import.meta.url).toString();
const iconPng = new URL("./icon1.png", import.meta.url).toString();
const faviconIco = new URL("./favicon.ico", import.meta.url).toString();
const appleIcon = new URL("./apple-icon.png", import.meta.url).toString();
const appManifest = new URL("./manifest.json", import.meta.url).toString();

// Images saved to `public` can be referenced via absolute paths
const webManifest192 = "/web-app-manifest-192x192.png";
const webManifest512 = "/web-app-manifest-512x512.png";

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
  title: "Court Culture",
  description: "We design, build, and operate Sports & Recreation Facilities that transform underused spaces into vibrant destinations for sport, wellness, and community connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en antialiased">
      {/* Head tags so browsers can find the various favicons and the manifest */}
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
        <link rel="icon" type="image/svg+xml" href={iconSvg} />
        <link rel="icon" type="image/png" sizes="32x32" href={iconPng} />
        <link rel="shortcut icon" href={faviconIco} />
        <link rel="manifest" href={appManifest} />
        {/* Optional webmanifest preview images from public */}
        <meta name="theme-color" content="#ffffff" />
        <link rel="preload" href={webManifest192} as="image" />
        <link rel="preload" href={webManifest512} as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable} ${satoshi.variable} antialiased`}
      >
        <NavBar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
