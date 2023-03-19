module.exports = {
    experimental: {
        appDir: true
    },
    eslint: {
        // ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            // Add your image domains here
            'dakotah-ferrarri.s3.us-west-1.amazonaws.com', // Replace with your S3 bucket domain
            'dakotah-ferrarri.s3.amazonaws.com',
            'lh3.googleusercontent.com'
        ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        // ignoreBuildErrors: true,
      },
  };