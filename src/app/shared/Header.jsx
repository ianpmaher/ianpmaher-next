import Contact from "../components/Contact";
import IconCard from "../components/IconCard";
import DarkMode from "./DarkMode";
import Link from "next/link";

const Header = (props) => {
    return (
        <header className={props.className}>
            {/* <div className="  rounded-2xl px-1 md:px-3 py-1 w-fit">
                <h1 className=" text-3xl md:text-5xl">Ian Maher</h1>
                <h2 className=" text-2xl md:text-3xl">Full Stack Developer & Education Advocate</h2>
            </div> */}
            <div className="absolute top-3 mx-auto my-0 flex md:flex-col justify-around gap-2">
                <div className="flex justify-center items-center gap-4">
                    <Link href="/" className="">
                        <IconCard variant="text">home</IconCard>
                    </Link>
                    <Link href="/blog" className="">
                        <IconCard variant="text">blog</IconCard>
                    </Link>
                </div>
                <div className="mx-auto my-0 flex md:flex-row gap-3">
                    <Contact />
                    <span className="relative top-0">
                        <DarkMode />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
