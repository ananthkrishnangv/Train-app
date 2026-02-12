const withSerwistInit = require("@serwist/next").default({
    swSrc: "app/sw.ts",
    swDest: "public/sw.js",
});

module.exports = withSerwistInit({
    // Other Next.js config options
    reactStrictMode: true,
});
