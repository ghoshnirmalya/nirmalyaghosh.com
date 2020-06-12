const isProd = process.env.NODE_ENV === "production";

export default {
  details: {
    title: "Nirmalya Ghosh",
    tagLine: "Designer and Developer",
    description: "Personal portfolio of Nirmalya Ghosh",
    url: "https://www.nirmalyaghosh.com",
  },
  assets: {
    avatar: isProd
      ? `https://${process.env.VERCEL_URL}/images/common/avatar.png`
      : "/images/common/avatar.png",
    favicon: isProd
      ? `https://${process.env.VERCEL_URL}/images/common/favicon.png`
      : "/images/common/favicon.png",
  },
  socialLinks: {
    twitter: "@nirmalyaghosh23",
  },
};
