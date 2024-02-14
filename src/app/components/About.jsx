const aboutMe = "Hi! I'm a software engineer with a background in education and a passion for learning."
const aboutMe2 = "I'm a graduate of General Assembly's Software Engineering Immersive Bootcamp, and I'm always learning something new!"
const aboutMe3 = "I love to find creative solutions for novel problems, individually and especially within a team environment."

const About = (props) => {
    return (
        <div className="flex flex-col justify-center items-center gap-1 p-0.5">
            <h1 className="text-2xl text-white">Full Stack Developer | Education Advocate</h1>
            <div className="bg-black p-1 text-white rounded-lg text-base md:text-lg w-[70vw] md:w-[50vw]">
                <p className="p-2">
                    {aboutMe}
                </p>
                <p className="p-2">
                    {aboutMe2}
                </p>
                <p className="p-2">
                    {aboutMe3}
                </p>
            </div>
        </div>
    );
};

export default About;
