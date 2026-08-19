import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./global.css";
import Nav from "../components/Nav";
import WhatsAppFab from "../components/WhatsappFab";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sonny Sayi Solutions | Technology & Creative Solutions Architect",
  description: "We cure daily workflow bottlenecks. Custom web platforms, IT infrastructure, and automated systems for Kenyan businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${inter.variable} font-sans bg-deep text-ink antialiased`}>
       <Nav />
<WhatsAppFab />
{children}
      </body>
    </html>
  );
}