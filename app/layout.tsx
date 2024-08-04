import "./globals.css";
import { Inter, Inconsolata } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
});
const inconsolata = Inconsolata({
  subsets: ["latin"],
});
// export metadata
export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS.",
  keywords: "Next.js, Typescript, TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Navbar />
        <main className="max-w-3xl m-auto">{children}</main>
      </body>
    </html>
  );
}
