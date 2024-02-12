import { Inter, Karla, Merriweather, Roboto_Flex } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "./shared/Header";
import Navbar from "./components/NavBar";
import Footer from "./shared/Footer";

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
        <html lang="en" className="bg-gradient md:bg-slice bg-fixed bg-origin-border bg-bottom bg-cover">
            <body className={`${karla.variable} ${merriweather.variable} ${robotoFlex.variable} ${inter.variable}`}>
                <StyledComponentsRegistry>
                    {/* PROGRESS BAR */}
                    <div className=" font-karla text-center min-h-screen flex flex-col">
                        <div className="flex flex-col justify-around">
                            <Header className="flex flex-col items-center justify-center my-5 gap-5" />
                            {/* <Navbar /> */}
                        </div>
                        {/* CONTACT */}
                        <div className="flex-1 flex flex-col sm:flex-row">
                            <main className="flex-1">
                                {children}
                                {/* ABOUT */}
                                {/* PROJECTS */}
                                {/* RESUME */}
                            </main>
                            <nav className="order-first sm:w-32">
                                {/* <h1>stuff</h1> */}
                            </nav>
                            <aside className="sm:w-32">
                                {/* <h1>more stuff</h1> */}
                            </aside>
                        </div>
                        <Footer className="my-2" />
                    </div>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
