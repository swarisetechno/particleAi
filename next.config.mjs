const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storyset.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
