/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        CURRENT_URL: process.env.CURRENT_URL,
    }
};

export default nextConfig;
