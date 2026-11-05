import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grant Li — Senior Backend Developer | PHP, TypeScript, Node.js",
  description:
    "Personal portfolio of Grant Li — Senior Backend Developer with 7+ years at Pinterest, OpenSea, and Facebook. PHP 8, Laravel, TypeScript, Node.js, retailer catalogues, and affiliate links.",
  openGraph: {
    title: "Grant Li — Senior Backend Developer",
    description:
      "PHP, TypeScript, and Node.js backends — catalogues, tracked affiliate links, and REST APIs.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
