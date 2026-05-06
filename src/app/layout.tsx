import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scpi-gouv.org"),
  title: {
    default: "Guide SCPI 2026 : comprendre, comparer et investir",
    template: "%s | SCPI Gouv",
  },
  description:
    "Guide pédagogique pour comprendre les SCPI, comparer les solutions, analyser la fiscalité, les avantages, la revente et l'investissement à crédit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}