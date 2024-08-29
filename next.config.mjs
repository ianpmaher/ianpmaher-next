/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["http.cat", "f005.backblazeb2.com", "upload.wikimedia.org", "tex.com.tw", "m.media-amazon.com"],
        
    },
};

export default nextConfig;
