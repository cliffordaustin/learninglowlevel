"use client";

import { Ubuntu } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { useEffect } from "react";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const darkMode: boolean = localStorage.getItem("darkMode")
      ? JSON.parse(localStorage.getItem("darkMode") || "")
      : false;

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);
  return (
    <html lang="en">
      <NextTopLoader
        color="#eb5e28"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #eb5e28,0 0 5px #eb5e28"
      />
      <body className={"bg-[#242423] " + ubuntu.className}>
        <main className="dark:bg-[#242423] bg-white">{children}</main>
      </body>
    </html>
  );
}
