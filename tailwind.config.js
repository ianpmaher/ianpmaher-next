/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // You can now use the font-sans and font-mono utility classes to apply the font to your elements.
            fontFamily: {
                sans: ['var(--font-karla)'],
                roboto: ["Roboto Flex", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                gradient: "radial-gradient(circle at 100%, rgba(82,84,164,1) 10%, rgba(247,160,130,1) 40%, rgba(178,166,215,1) 55%)",
            },
        },
    },
    plugins: [],
};
