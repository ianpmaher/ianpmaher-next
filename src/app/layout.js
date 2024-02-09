import { Inter, Karla, Roboto_Flex } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "./shared/Header";
import Navbar from "./components/NavBar";

// https://nextjs.org/docs/app/building-your-application/optimizing/fonts
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});
const karla = Karla({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-karla",
});
const robotoFlex = Roboto_Flex({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-flex",
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
                    <div className=" font-karla bg-gradient text-center">
                        <div className="flex flex-col justify-around">
                            <Header className="flex items-center justify-center gap-1 outline-red-600 outline-double my-5" />
                            <Navbar />
                        </div>
                        {/* CONTACT */}
                        <main className="flex flex-1 flex-col">
                            {children}
                            {/* ABOUT */}
                            {/* PROJECTS */}
                            {/* RESUME */}
                        </main>
                        {/* FOOTER */}
                    </div>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
