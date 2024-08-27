/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "www.offdecor.com",
        port: "",
        pathname:
          "/image/media/postcategory/5258/Iranian-Food-Restaurants.jpg/**",
      },
    ],
  },
};

export default nextConfig;
