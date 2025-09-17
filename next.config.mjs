// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["example.com"],
	},
	experimental: {
		turbo: false, // use Webpack instead of Turbopack
	},
};

export default nextConfig;
