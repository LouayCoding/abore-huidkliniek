import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { lexend, marcellus, outfit } from "@/lib/fonts";
import "./globals.css";
import { CookieBanner } from "@/components/site/cookie-banner";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// fonts moved to src/lib/fonts for reuse

export const metadata: Metadata = {
  metadataBase: new URL("https://huidkliniekabore.nl"),
  title: "Huidkliniek Rijswijk | Laser & Acne Behandelingen | Aboré",
  description: "Luxe huidkliniek in Rijswijk. ✓ Laserontharing ✓ Acne behandeling ✓ Pigmentvlekken ✓ Huidverjonging. 10+ jaar ervaring. Boek gratis consult.",
  keywords: ["huidkliniek Rijswijk", "laserontharing", "acne behandeling", "pigmentvlekken verwijderen", "huidverjonging", "tatoeage verwijderen", "huidkliniek Den Haag"],
  authors: [{ name: "Aboré Huidkliniek" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://huidkliniekabore.nl",
    siteName: "Aboré Huidkliniek",
    title: "Aboré Huidkliniek Rijswijk | Laser & Acne Behandelingen",
    description: "Luxe huidkliniek in Rijswijk gespecialiseerd in laserontharing, acne behandeling en huidverjonging. Boek nu je gratis consult.",
    images: [
      {
        url: "/hero/11.jpg",
        width: 1200,
        height: 630,
        alt: "Aboré Huidkliniek Rijswijk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aboré Huidkliniek Rijswijk | Laser & Acne Behandelingen",
    description: "Luxe huidkliniek in Rijswijk. Laserontharing, acne behandeling en huidverjonging. Boek gratis consult.",
    images: ["/hero/11.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Aboré",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${marcellus.variable} ${outfit.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
        <CookieBanner />
        <GoogleAnalytics gaId="G-MGH8QMTDZ5" />
      </body>
    </html>
  );
}
