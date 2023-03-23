const MS_PER_SECOND = 1000;
const SECONDS_PER_DAY = 86400;

module.exports = {
  swcMinify: true,
  transpilePackages: ["@acme/ui", "lodash-es"],
  experimental: {
    appDir: true,
  },
  eslint: {
    // ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      // Add your image domains here
      "dakotah-ferrarri.s3.us-west-1.amazonaws.com", // Replace with your S3 bucket domain
      "dakotah-ferrarri.s3.amazonaws.com",
      "lh3.googleusercontent.com",
      "cdn.pixabay.com",
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 10 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 1,
  },
};
