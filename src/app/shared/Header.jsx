import Contact from "../components/Contact";
import DarkMode from "./DarkMode";


const Header = (props) => {
    return (
        <header className={props.className}>
            <DarkMode />
            <div className="font-merriweather dark:text-white dark:bg-black outline outline-primary-dracula outline-2 bg-white rounded-2xl mb-1 px-3 py-1 w-fit">
                <h1 className=" text-3xl md:text-5xl">Ian Maher</h1>
                <h3 className=" text-2xl md:text-3xl">Full Stack Developer & Education Advocate</h3>
            </div>
            <Contact />
        </header>
    );
};

export default Header;
