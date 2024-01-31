import { Inter, Karla, Roboto_Flex } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

// https://nextjs.org/docs/app/building-your-application/optimizing/fonts
const inter = Inter({ 
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});
const karla = Karla({ 
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-karla',
});
const robotoFlex = Roboto_Flex({ 
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-flex',
});

export const metadata = {
    title: "Ian Maher",
    description: "Portfolio site, web development, software engineering",
    // https://github.com/vercel/next.js/discussions/14806#discussioncomment-6584048
    verification: {
        google: "n7UivYL9MEcQRy-dWTsQWaDJMsZEBJb4vtseGX71JH4",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${karla.variable} ${robotoFlex.variable} ${inter.variable}`}>
                <StyledComponentsRegistry>
                    {/* PROGRESS BAR */}
                    <div className=" font-sans bg-gradient">
                        {/* HEADER */}

                        {/* NAV */}
                        {/* CONTACT */}
                        <section className="">
                            {children}
                            {/* ABOUT */}
                            {/* PROJECTS */}
                            {/* RESUME */}
                        </section>
                        {/* FOOTER */}
                    </div>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
