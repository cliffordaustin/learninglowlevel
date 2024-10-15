"use client";

import { Ubuntu } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { useEffect } from "react";
import Cookie from "js-cookie";
import Provider from "./_trpc/Provider";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const tagManagerArgs = {
  gtmId: "GTM-MXFRZ7FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lightMode = Cookie.get("lightMode") === "true" ? true : false;

    if (lightMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (
      process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_GA_TRACKING_ID
    ) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
    }

    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <html lang="en">
      <body className={"dark bg-[#242423] " + ubuntu.className}>
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
        <Provider>
          <main className="dark:bg-[#242423] bg-white">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
