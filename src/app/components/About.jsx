import Seal from "../components/Seal";
import Cat from "./Cat";
import Dog from "./Dog";
import CardBase from "./CardBase";

const aboutMe = "Hi! I'm a software engineer, educator, and I'm passionate about learning more every day.";
const aboutMe2 = "I'm excited to continue growing as a developer and a person.";
const aboutMe3 = "I love to find creative solutions for novel problems, individually and collaboratively.";
const aboutMe4 = "General Assembly Software Engineering Immersive Graduate.";
const aboutMe5 = "Boston University B.A. & Providence College M.Ed.";
const aboutMe6 = "Lover of dogs, cats, fiction, and coffee.";

const About = (props) => {
    return (
        <div className="flex flex-col justify-center items-center gap-1 p-0.5">
            <div className="flex p-0.5">
                <CardBase variant="text" className="">
                    {aboutMe}
                </CardBase>
                <CardBase variant="text" className=""></CardBase>
                <CardBase variant="text" className=""></CardBase>
                <CardBase variant="text" className="">
                    {aboutMe2}
                </CardBase>
                <CardBase variant="text" className="">
                    {aboutMe3}
                </CardBase>
                <CardBase variant="text" className=""></CardBase>
                <CardBase variant="text" className=""></CardBase>
                <CardBase variant="text" className="">
                    {aboutMe4}
                </CardBase>
                <CardBase variant="text" className="">
                    {aboutMe5}
                </CardBase>
                <CardBase variant="text" className="">
                    {aboutMe6}
                </CardBase>
            </div>
        </div>
    );
};

export default About;
