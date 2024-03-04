import Contact from "../components/Contact";
import DarkMode from "./DarkMode";


const Header = (props) => {
    return (
        <header className={props.className}>
            {/* <DarkMode /> */}
            <div className="font-merriweather text-white">
                <h1 className=" text-5xl">Ian Maher</h1>
                <h3 className=" text-4xl">Full Stack Developer & Education Advocate</h3>
            </div>
            <Contact />
        </header>
    );
};

export default Header;
