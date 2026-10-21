import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Open_Sans, Oswald } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";

import { Navigation } from "@/components/Navigation";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assets";

import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://byu-ece-software.github.io/microcl-lab/"),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const backgroundStyle = {
    "--site-background": `url("${assetPath("/images/wood-background.jpg")}")`,
  } as CSSProperties;

  return (
    <html lang="en" className={`${openSans.variable} ${oswald.variable}`}>
      <body style={backgroundStyle}>
        <div className="site-shell">
          <header className="site-header">
            <Link className="site-brand" href="/" aria-label={`${site.name} home`}>
              <Image
                className="site-logo"
                src={assetPath("/images/lab-mark.png")}
                alt="Micropower Circuits Laboratory sprout logo"
                width={214}
                height={225}
                priority
              />
              <span>{site.name}</span>
            </Link>
            <Navigation />
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            © {new Date().getFullYear()} {site.name}
          </footer>
        </div>
      </body>
    </html>
  );
}
