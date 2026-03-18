import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://altaiventures.co"),
  title: {
    template: "%s | Altai Ventures",
    default:
      "Altai Ventures | East Bay Rental Homes — Oakland & Castro Valley",
  },
  description:
    "Family-owned rental homes in Oakland and Castro Valley, CA. Short-term Airbnb rental in Oakland and long-term houses for rent in Castro Valley. East Bay property management with a personal touch.",
  keywords: [
    "short term rental Oakland CA",
    "Airbnb Oakland East Bay",
    "house for rent Castro Valley",
    "rental homes East Bay California",
    "Castro Valley rental",
    "Oakland vacation rental",
    "East Bay property management",
    "Oakland short stay",
    "Castro Valley homes for rent",
  ],
  alternates: {
    canonical: "https://altaiventures.co",
  },
  openGraph: {
    title: "Altai Ventures | East Bay Rental Homes — Oakland & Castro Valley",
    description:
      "Family-owned rental homes in Oakland and Castro Valley, CA. Short-term Airbnb stays and long-term rentals in the East Bay.",
    url: "https://altaiventures.co",
    siteName: "Altai Ventures",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Altai Ventures — East Bay Rental Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altai Ventures | East Bay Rental Homes — Oakland & Castro Valley",
    description:
      "Family-owned rental homes in Oakland and Castro Valley, CA. Short-term Airbnb stays and long-term rentals in the East Bay.",
    images: ["/opengraph-image"],
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
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorant.variable} bg-ivory antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
