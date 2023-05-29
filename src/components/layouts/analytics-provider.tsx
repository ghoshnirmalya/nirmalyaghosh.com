"use client";

import { initGA } from "lib/google-analytics";
import isProduction from "lib/is-production";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (isProduction) {
      initGA(process.env.NEXT_PUBLIC_GA as string);
    }
  }, []);

  return (
    <>
      {children}
      {isProduction && <Analytics />}
    </>
  );
};

export default AnalyticsProvider;
