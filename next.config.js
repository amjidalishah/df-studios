
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  redirects: async () => {
    return [
      {
        source: "/admin",
        destination: `http://localhost:1337/admin/`,
        permanent: false,
      },
    ];
  },
  env: {
    identifier: 'lmraza98@gmail.com',
    password: 'Lmrgxd48m2!',
    GRAPHQL_API_URL: 'http://localhost:1337/graphql',
    SECRET_COOKIE_PASSWORD: '@yYEgGIUQB3yYJuSygh35mW2fXMKveH&cREy8kTbJgxKws4bK5mIzh)RFA)YUhF@',
    
  },
  images: {
    domains: ['dakotah-ferrarri.s3.us-west-1.amazonaws.com'],
    unoptimized: true,
  },
  // experimental: {
  //   images: {
      
  //     domains: ['dakotah-ferrarri.s3.us-west-1.amazonaws.com'],
  //   },
  // },
};

module.exports = nextConfig;