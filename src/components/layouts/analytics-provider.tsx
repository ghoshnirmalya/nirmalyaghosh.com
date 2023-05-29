"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

import { initGA } from "lib/google-analytics";
import isProduction from "lib/is-production";

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
