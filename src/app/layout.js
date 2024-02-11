import { Inter, Karla, Merriweather, Roboto_Flex } from "next/font/google";
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
    weight: "700",
    variable: "--font-karla",
});
const robotoFlex = Roboto_Flex({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-flex",
});
const merriweather = Merriweather({
    subsets: ["latin"],
    display: "swap",
    weight: "700",
    variable: "--font-merriweather",
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
        <html lang="en" className="bg-gradient md:bg-slice bg-fixed bg-origin-border bg-bottom bg-cover" >
            <body className={`${karla.variable} ${merriweather.variable} ${robotoFlex.variable} ${inter.variable}`}>
                <StyledComponentsRegistry>
                    {/* PROGRESS BAR */}
                    <div className=" font-karla text-center m-0">
                        <div className="flex flex-col justify-around">
                            <Header className="flex items-center justify-center outline-red-600 outline-double my-5 gap-5" />
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
