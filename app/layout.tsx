import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HIVE — Build Faster. Ship Smarter.",
  description:
    "The all-in-one platform that empowers your team to move from idea to production in record time — without the complexity.",
  openGraph: {
    title: "HIVE — Build Faster. Ship Smarter.",
    description:
      "The all-in-one platform that empowers your team to move from idea to production in record time.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIVE — Build Faster. Ship Smarter.",
    description:
      "The all-in-one platform that empowers your team to move from idea to production in record time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-[family-name:var(--font-inter)] antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
