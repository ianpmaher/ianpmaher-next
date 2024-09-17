import { Inter, Karla, Merriweather, Roboto_Flex } from "next/font/google";
import "./globals.css";
// import StyledComponentsRegistry from "@/lib/registry";
import Header from "./shared/Header";
import Navbar from "./components/NavBar";
import Footer from "./shared/Footer";
import Providers from "./Providers";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Ian Maher - web dev and engineer",
  description: "frontend, backend, fullstack, software engineering",
  // https://github.com/vercel/next.js/discussions/14806#discussioncomment-6584048
  property: {
    "og:title": "Ian Maher - web dev and engineer",
    "og:description": "Portfolio site, web development, software engineering",
    "og:type": "website",
    "og:url": "https://ianpmaher.com",
  },
  verification: {
    google: "n7UivYL9MEcQRy-dWTsQWaDJMsZEBJb4vtseGX71JH4",
  },
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className="bg-gradient md:bg-slice bg-fixed bg-origin-border bg-bottom bg-cover">
    <html lang="en" className="">
      <body
        className={`${karla.variable} ${merriweather.variable} ${robotoFlex.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        {/* <StyledComponentsRegistry> */}
        <Providers>
          {/* <ProgressBar /> */}
          {/* <div className="bg-slate-300 dark:bg-dracula-subalt"> */}
          {/* <div className="bg-gradientlight md:dark:bg-slice bg-fixed dark:bg-origin-border md:dark:bg-bottom dark:bg-cover pt-1 pb-8 md:pb-20 dark:bg-phonedark"> */}
          {/* <div className="bg-gradientlight bg-fixed dark:bg-origin-border md:dark:bg-bottom dark:bg-cover pb-2 md:pb-8 dark:bg-phonedark bg-center"> */}
          <div className="dark:bg-dracula-bg bg-cooler1-mint text-paper-text dark:text-dracula-text pb-2 md:pb-8">
            <div className="dark:bg-dracula-bg bg-paper-bg bg-opacity-10 rounded-2xl text-paper-text dark:text-dracula-text font-karla text-center min-h-screen flex flex-col max-w-[85vw] my-0 mx-auto">
              <div className="flex flex-col justify-center ">
                <Header className=" flex flex-col items-center justify-center mx-auto my-2 gap-4" />
                {/* <Navbar /> */}
              </div>
              {/* CONTACT */}
              <div className="flex-1 flex flex-col sm:flex-row">
                <main className="flex-1">
                  {" "}
                  {/* change to flex-1 if add actual nav or aside elements to maintain holy grail  */}
                  {children}
                  <Analytics />
                  {/* ABOUT */}
                  {/* PROJECTS */}
                  {/* RESUME */}
                </main>
                <nav className="order-first sm:w-14">{/* <h1>stuff</h1> */}</nav>
                <aside className="sm:w-14">{/* <h1>more stuff</h1> */}</aside>
              </div>
              <Footer className="my-2" />
            </div>
          </div>
        </Providers>
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  );
}
