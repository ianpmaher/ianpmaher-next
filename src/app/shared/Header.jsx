import Contact from "../components/Contact";
import DarkMode from "./DarkMode";

const Header = (props) => {
    return (
        <header className={props.className}>
            <div className="  rounded-2xl px-1 md:px-3 py-1 w-fit">
                <h1 className=" text-3xl md:text-5xl">Ian Maher</h1>
                <h2 className=" text-2xl md:text-3xl">Full Stack Developer & Education Advocate</h2>
            </div>
            <div className="absolute right-2 top-2 mx-auto my-0 flex flex-col md:flex-row gap-2">
                <Contact />
                <span className="relative top-0">
                    <DarkMode />
                </span>
            </div>
        </header>
    );
};

export default Header;
