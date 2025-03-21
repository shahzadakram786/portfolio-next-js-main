import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { Analytics } from "@vercel/analytics/react";
import HireMe from "@/components/hireMe";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://12123412.xyz'), 
  title: "Shahzad Dev Portfolio | Web Developer | Shahzad Akram",
  description: "Portfolio of Shahzad Akram | Web Developer specializing in Next.js, React, and blockchain technologies , Front end developer",
  keywords: ["web developer portfolio", "Next.js developer", "React portfolio", "blockchain developer", "frontend developer"],
  openGraph: {
    title: "Shahzad Akram | Web Developer",
    description: "Professional portfolio of Shahzad Akram showcasing web development projects",
    url: "/",
    siteName: "Shahzad Dev Portfolio",
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
          {/* <HireMe/> */}
          <Analytics />
        </TransitionProvider>
      </body>
    </html>
  );
}