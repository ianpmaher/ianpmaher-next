import { TypingWords } from "../components/TypingWords";

const AboutPage = (props) => {
    return (
        <div className="flex justify-normal flex-col mx-auto my-32">
            <h1>About</h1>
            <p>Providence College | Master of Education: Counseling — Providence, RI May 2018</p>
            <p>Boston University | Bachelor of Arts: Psychology, English — Boston, MA May 2015</p>
            <TypingWords />
        </div>
    );
};

export default AboutPage;
