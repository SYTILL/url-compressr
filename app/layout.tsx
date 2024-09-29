import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URL Compressr",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        {children}
      </body>
    </html>
  );
}
