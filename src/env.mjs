import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GOOGLE_SITE_VERIFICATION: z.string().min(10),
    AHREFS_SITE_VERIFICATION: z.string().min(10),
  },
  client: {
    NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID:
      process.env.NODE_ENV === "production"
        ? z.string().length(8)
        : z.string().optional(),
    NEXT_PUBLIC_HIGHLIGHT_SERVICE_NAME:
      process.env.NODE_ENV === "production"
        ? z.string().min(5)
        : z.string().optional(),
    NEXT_PUBLIC_GA:
      process.env.NODE_ENV === "production"
        ? z.string().min(10)
        : z.string().optional(),
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
