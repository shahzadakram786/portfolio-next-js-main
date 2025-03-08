import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shahzad Dev Portfolio | Web Developer | Shahzad Akram",
  description: "Portfolio of Shahzad Akram | Web Developer specializing in Next.js, React, and blockchain technologies",
  keywords: ["web developer portfolio", "Next.js developer", "React portfolio", "blockchain developer", "frontend developer"],
  openGraph: {
    title: "Shahzad Akram | Web Developer",
    description: "Professional portfolio of Shahzad Akram showcasing web development projects",
    url: "https://12123412.xyz",
    siteName: "Shahzad Dev Portfolio",
    images: [
      {
        url: "https://12123412.xyz/opengraph-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>
          {children}
          <Analytics />
        </TransitionProvider>
      </body>
    </html>
  );
}