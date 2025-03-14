/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
        },
        {
          protocol: 'https',
          hostname: 'res.youxituoluo.com',
        },
        {
          protocol: 'https',
          hostname: 'shp.qpic.cn',
        },
        {
          protocol: 'https',
          hostname: 'courses.ics.hawaii.edu',
        },
      ],
    },
  };
  

export default nextConfig;
