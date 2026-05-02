import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ronaldgrant.net"),
  title: {
    default: "Ronald Grant",
    template: "%s | Ronald Grant",
  },
  description:
    "A personal gateway to Ronald Grant's portfolio, projects, and profile.",
  applicationName: "Ronald Grant",
  authors: [{ name: "Ronald Grant", url: "https://ronaldgrant.net" }],
  creator: "Ronald Grant",
  publisher: "Ronald Grant",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ronald Grant",
    description:
      "Choose between Ronald Grant's portfolio of work and personal profile.",
    url: "/",
    siteName: "Ronald Grant",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronald Grant",
    description:
      "Choose between Ronald Grant's portfolio of work and personal profile.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
