import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"]
});

export const metadata: Metadata = {
  title: "Frisco Foundation Repair | Stratum Structural Engineering",
  description: "Engineered foundation repair for Frisco's expansive soils. Request a free Frisco site inspection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-slate-900 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
