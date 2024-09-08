import type { Metadata } from "next";
import "./globals.css";
import { NavbarProvider } from "./providers/NavbarProvider";

export const metadata: Metadata = {
  title: "Ashtanga Architects",
  description: "Ashtanga Architects is a premium architect firm located in North India, specializing in sustainable and innovative design solutions.",
  keywords: ["architecture", "architect in agra", "architecture firm in agra", "architect in delhi", "architecture firm in delhi", "architect in Delhi NCR", "architecture firm in Delhi NCR", "architect in lucknow", "architect in Noida", "architecture firm in lucknow", "architecture firm in Noida", "architecture firm in north india", "sustainable design", "premium architects", "innovative buildings"],
  authors: [{ name: "Ashtanga Architects" }, { url: "https://www.ashtangaarchitect.com" }],
  creator: "Ashtanga Architects",
  publisher: "Ashtanga Architects",
  openGraph: {
    title: "Ashtanga Architects - Premium Architectural Solutions",
    description: "Discover innovative and sustainable architectural designs by Ashtanga Architects, North India's leading architect firm.",
    url: "https://www.ashtangaarchitect.com",
    siteName: "Ashtanga Architects",
    images: [{ url: 'https://www.ashtangaarchitect.com/logo-black.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ashtanga Architects - Innovative Design Solutions",
    description: "Premium architectural services in North India, focusing on sustainability and innovation.",
    images: ['https://www.ashtangaarchitect.com/logo-black.png'],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarProvider>
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}
