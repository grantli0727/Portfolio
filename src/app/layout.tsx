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
  title: "Grant Li — Senior Software Engineer | AI, Backend & Next.js",
  description:
    "Personal portfolio of Grant Li — Senior Software Engineer with 7+ years at Pinterest, OpenSea, and Facebook. AI/LLM applications, backend systems, and React / Next.js.",
  openGraph: {
    title: "Grant Li — Senior Software Engineer",
    description:
      "AI / LLM applications, scalable backends, and polished React / Next.js products.",
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
