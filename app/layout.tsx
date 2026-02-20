import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel",
  description:
    "AI Field Development Engineer at Databricks. Builder of ML systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-[#e5e5e5]`}
      >
        <Nav />
        <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
