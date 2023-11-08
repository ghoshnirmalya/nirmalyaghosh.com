import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GOOGLE_SITE_VERIFICATION: z.string().min(10),
    AHREFS_SITE_VERIFICATION: z.string().min(10),
  },
  client: {
    NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID: z.string().length(8),
    NEXT_PUBLIC_HIGHLIGHT_SERVICE_NAME: z.string().min(5),
    NEXT_PUBLIC_GA: z.string().min(10),
  },
  // Only destructure client variables.
  experimental__runtimeEnv: {
    NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID:
      process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID,
    NEXT_PUBLIC_HIGHLIGHT_SERVICE_NAME:
      process.env.NEXT_PUBLIC_HIGHLIGHT_SERVICE_NAME,
    NEXT_PUBLIC_GA: process.env.NEXT_PUBLIC_GA,
  },
});
