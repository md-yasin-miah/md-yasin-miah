import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Yasin Miah - Frontend Engineer | React/Next.js Developer",
  description: "Crafting high-performance, user-friendly web apps with modern frontend technologies. React/Next.js Developer based in Dhaka, Bangladesh. 3+ years experience in React, TypeScript, and modern web development.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Portfolio",
    "JavaScript Developer",
    "UI/UX Developer",
    "Dhaka Developer",
    "Bangladesh Developer",
    "Freelance Developer"
  ],
  authors: [{ name: "Md Yasin Miah" }],
  creator: "Md Yasin Miah",
  openGraph: {
    title: "Md Yasin Miah - Frontend Engineer",
    description: "Crafting high-performance, user-friendly web apps with modern frontend technologies.",
    url: "https://mdyasinmiah.me",
    siteName: "Md Yasin Miah Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md Yasin Miah - Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Yasin Miah - Frontend Engineer",
    description: "Crafting high-performance, user-friendly web apps with modern frontend technologies.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1f2937" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent hydration mismatches from browser extensions
              (function() {
                const originalSetAttribute = Element.prototype.setAttribute;
                Element.prototype.setAttribute = function(name, value) {
                  if (name.startsWith('__processed_') || name.startsWith('bis_') || name.startsWith('data-')) {
                    return;
                  }
                  return originalSetAttribute.call(this, name, value);
                };
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Md Yasin Miah",
              "jobTitle": "Frontend Engineer",
              "description": "Crafting high-performance, user-friendly web apps with modern frontend technologies",
              "url": "https://mdyasinmiah.me",
              "sameAs": [
                "https://github.com/md-yasin-miah",
                "https://linkedin.com/in/mdyasinmiah"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhaka",
                "addressCountry": "Bangladesh"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
                "Git"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Frontend Developer",
                "description": "Developing modern web applications with React and Next.js"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
        suppressHydrationWarning
      >
        <div className="min-h-screen">
          <Navigation />
          <ScrollToTop />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
