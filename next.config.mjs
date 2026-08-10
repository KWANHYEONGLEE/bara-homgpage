/** @type {import('next').NextConfig} */
const nextConfig = {
  // 상위 디렉터리(홈)에 있는 package-lock.json 때문에 워크스페이스 루트가
  // 잘못 잡히는 것을 막는다.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
