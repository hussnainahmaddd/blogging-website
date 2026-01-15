import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Importing Outfit and Inter
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL('https://nexawell.blog'),
  title: {
    default: "NexaWell - Tech & Health Insights",
    template: "%s | NexaWell"
  },
  description: "Explore the intersection of technology and biology. Premium insights for a better future.",
  keywords: ["Health Technology", "Bio-hacking", "Pregnancy Guide", "AI in Healthcare", "Future Tech", "Wellness"],
  authors: [{ name: "NexaWell Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexawell.blog",
    siteName: "NexaWell",
    images: [
      {
        url: "/images/blog/ai-healthcare.png", // Default OG Image
        width: 1200,
        height: 630,
        alt: "NexaWell - Tech & Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexawell",
    creator: "@nexawell",
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
        <Navbar />
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
