/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "selector", // or 'media' or 'class'
    theme: {
        typography: (theme) => ({}),
        extend: {
            // You can now use the font-sans and font-mono utility classes to apply the font to your elements.
            fontFamily: {
                sans: ["Karla", "sans-serif"],
                roboto: ["Roboto Flex", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                merriweather: ["Merriweather", "serif"],
            },
            backgroundImage: {
                gradient:
                    "radial-gradient(circle at 100%, rgba(82,84,164,1) 10%, rgba(247,160,130,1) 40%, rgba(178,166,215,1) 55%)",
                slice: "url(/assets/slice3.svg)",
            },
            colors: {
                primary: {
                    yellow: "#FFD040",
                    turquoise: "rgb(105,255,255)",
                },
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
};
