const withSerwistInit = require("@serwist/next").default({
    swSrc: "app/sw.ts",
    swDest: "public/sw.js",
    disable: process.env.NODE_ENV !== "production",
});

module.exports = withSerwistInit({
    reactStrictMode: true,
    // Silence Turbopack error in Next.js 16 when using custom webpack config (Serwist)
    turbopack: {},
});
