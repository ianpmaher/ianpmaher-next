import Image from "next/image";
import IconCard from "./IconCard";
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
        cssIcon,
        htmlIcon,
        jsIcon,
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
        <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-2 w-full h-full p-4 list-none place-content-center place-items-center m-0 object-cover">
            {/* {cardImages.map((cardImages) => { */}
            <IconCard
                variant="secondary"
                key={cardImages[0]}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[0]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center "
            >
                <Image src={cardImages[1]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center "
            >
                <Image src={cardImages[2]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[3]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[4]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[5]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[6]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[7]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[8]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[9]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[10]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[11]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[12]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[13]} alt="icon" width={75} height={75} />
            </IconCard>
            <IconCard
                variant="secondary"
                key={cardImages}
                className=" flex flex-col flex-wrap items-center justify-center"
            >
                <Image src={cardImages[14]} alt="icon" width={75} height={75} />
            </IconCard>
        </section>
    );
};

export default GridIcons;
