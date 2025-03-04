import type { Metadata } from "next";
import "./globals.css";
import Navi from "@/components/navi";
import Footer from "@/components/footer";
import { Lato } from "next/font/google";
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solar PV Partners",
  description: "Solar PV Partners",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  openGraph: {
    title: "Solar PV Partners",
    siteName: "Solar PV Partners",
    description: "Solar PV Partners",
    images: [
      {
        url: "/images/logo_horizontal.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen flex flex-col`}>
        <Navi />
        <main className={`${lato.className} h-full w-full flex-grow`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
