import Image from "next/image";
import IconCard from "./IconCard";
import CardBase from "./CardBase";
import { TypingWords } from "./TypingWords";

const typeScriptIcon = "/assets/typescript.svg";

const aboutMeArray = [
    "Hi! I'm a software engineer and educator, RI-born and MA-located.",
    "I'm passionate about learning every day.",
    // "I love to find creative solutions for novel problems, individually and collaboratively.",
    "General Assembly Software Engineering Immersive Graduate.",
    "Boston University B.A. & Providence College M.Ed.",
    "Lover of dogs, cats, fiction, and coffee.",
];

const About = (props) => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-1 p-0">
            <CardBase variant="text" className="flex-col p-2">
                {aboutMeArray.map((item, index) => {
                    return (
                        <span key={index}>
                            <p className="p-1">{item}</p>
                        </span>
                    );
                })}
                <div className="relative h-full w-full">
                    <div className="absolute">
                        <TypingWords />
                    </div>
                </div>
            </CardBase>
            <CardBase variant="text" className="flex-col gap-2 p-2">
                <p>Currently learning:</p>
                <div className="">
                    <IconCard variant="learning">
                        <Image
                            src={typeScriptIcon}
                            alt="TypeScript"
                            title="TypeScript"
                            width={80}
                            height={80}
                            className="hover:transform hover:scale-125 transition-all duration-300 ease-in-out"
                        />
                    </IconCard>
                </div>
            </CardBase>
        </div>
    );
};

export default About;
