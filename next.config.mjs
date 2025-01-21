const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.sanity.io"
            }
        ]
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx']
};

export default nextConfig;
