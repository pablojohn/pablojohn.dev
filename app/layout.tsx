import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Particles from "./components/particles";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "pablojohn.dev",
    template: "%s | pablojohn.dev",
  },
  description: "pablojohn martinez",
  openGraph: {
    title: "pablojohn.dev",
    description:
      "pablojohn martinez",
    url: "https://pablojohn.dev",
    siteName: "pablojohn.dev",
    images: [
      {
        url: "https://pablojohn.dev/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "pablojohn",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <body className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined }`}>
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
          <Navigation />
          {children}
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
