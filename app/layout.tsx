import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";
import Topbar from "./Topbar";

const fredoka = Fredoka({ 
  subsets: ["latin"],
  display: "swap"
});

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
        <div className="w-screen min-h-screen h-max bg-slate-800 text-white font-Fredoka tracking-wide flex flex-col">
          <Topbar />
          <div className="flex-1 flex items-center flex-col justify-between">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
