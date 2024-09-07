import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashtanga Architects",
  description: "Ashtang Architects is a premium architect firm located in North India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
