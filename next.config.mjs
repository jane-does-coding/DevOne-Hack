/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		turbo: {
			resolveAlias: {},
		},
	},
	webpack: (config) => {
		return config;
	},
};

module.exports = {
	...nextConfig,
	// Force webpack instead of turbopack
	experimental: { turbo: false },
};
