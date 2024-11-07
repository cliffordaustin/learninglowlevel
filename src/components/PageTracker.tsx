"use client";

import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { Post } from "@prisma/client";

function PageTracker({ text }: { text?: string }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
        debug: process.env.NODE_ENV === "development",
        track_pageview: true,
        persistence: "localStorage",
        ignore_dnt: true,
      });

      mixpanel.track(text || "Page Viewed");
    }
  });
  return <div></div>;
}

export default PageTracker;
