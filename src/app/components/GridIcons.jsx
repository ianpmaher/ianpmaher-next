import Image from "next/image";
import IconCard from "./IconCard";
import Carousel from "./Carousel";
const cssIcon = "/assets/css-3.svg";
const htmlIcon = "/assets/html-5.svg";
const jsIcon = "/assets/javascript.svg";
const reactIcon = "/assets/react.svg";
const nextIcon = "/assets/nextjs.svg";
const nodeIcon = "/assets/nodejs.svg";
const expressIcon = "/assets/express.svg";
const mongoIcon = "/assets/mongodb.svg";
const postgresIcon = "/assets/postgresql.svg";
const gitIcon = "/assets/git-icon.svg";
const githubIcon = "/assets/github-icon.svg";
const tailwindCssIcon = "/assets/tailwindcss.svg";
const materialUiIcon = "/assets/material-ui.svg";
const pythonIcon = "/assets/python.svg";
const djangoIcon = "/assets/django.svg";

const GridIcons = (props) => {
    const cardImages = [
        jsIcon,
        cssIcon,
        // htmlIcon,
        reactIcon,
        nextIcon,
        nodeIcon,
        expressIcon,
        mongoIcon,
        postgresIcon,
        gitIcon,
        githubIcon,
        tailwindCssIcon,
        materialUiIcon,
        pythonIcon,
        djangoIcon,
    ];

    return (
        // <section className="mx-auto my-0 w-[50vw]">
        <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:w-[70vw] sm:h-[70%] lg:w-full h-full p-3 list-none place-content-center place-items-center mx-auto my-0 object-cover">
            {/* {cardImages.map((cardImages) => { */}
            {/* <Carousel> */}
            <IconCard
                variant="secondary"
                key={cardImages[0]}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[0]} alt="javascript" title="javascript" width={65} height={65} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center "
            >
                <Image src={cardImages[1]} alt="CSS icon" title="CSS" width={65} height={65} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center "
            >
                <Image src={cardImages[2]} alt="React icon" title="React" width={80} height={80} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[3]} alt="NextJS" title="Next" width={80} height={80} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[4]} alt="Node.js icon" title="Node" width={100} height={100} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[5]} alt="Express icon" title="Express" width={80} height={80} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[6]} alt="MongoDB icon" title="MongoDB" width={90} height={90} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[7]} alt="PostgreSQL icon" title="Postgres SQL" width={100} height={100} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[8]} alt="Git icon" title="git" width={80} height={80} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[9]} alt="GitHub icon" title="GitHub " width={80} height={80} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[10]} alt="Tailwind CSS" title="Tailwind CSS" width={100} height={100} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[11]} alt="Material UI icon" title="Material UI" width={100} height={100} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[12]} alt="Python icon" title="Python" width={80} height={80} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[13]} alt="Django icon" title="Django" width={80} height={80} />
            </IconCard>
            {/* <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                    >
                    <Image src={cardImages[14]} alt="Django icon" title="Django" width={80} height={80} />
                </IconCard> */}
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src="/assets/figma.svg" alt="Figma icon" title="Figma" width={80} height={80} />
            </IconCard>
            {/* </section> */}
            {/* </Carousel> */}
        </section>
    );
};

export default GridIcons;
