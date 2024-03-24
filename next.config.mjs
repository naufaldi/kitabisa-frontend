/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'img.staging.kitabisa.cc',
      },
    ],
  },
};

export default nextConfig;
