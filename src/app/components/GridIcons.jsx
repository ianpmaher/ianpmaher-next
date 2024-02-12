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
        <section className="flex flex-col flex-wrap">
            <section className="grid grid-cols-3 md:grid-cols-4 gap-2 w-full h-full p-4 list-none place-content-center place-items-center m-0 object-cover">
                {/* {cardImages.map((cardImages) => { */}
                <IconCard
                    variant="secondary"
                    key={cardImages[0]}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[0]} alt="css icon" title="css" width={65} height={65} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center "
                >
                    <Image src={cardImages[1]} alt="html icon" title="html" width={65} height={65} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center "
                >
                    <Image src={cardImages[2]} alt="JavaScript icon" title="JavaScript" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[3]} alt="React icon" title="React" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[4]} alt="NextJS icon" title="NextJS" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[5]} alt="Node.js icon" title="Node" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[6]} alt="Express icon" title="Express" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[7]} alt="MongoDB icon" title="MongoDB" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[8]} alt="PostgreSQL icon" title="PostgreSQL" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[9]} alt="git icon" title="git " width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[10]} alt="github icon" title="github " width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[11]} alt="Tailwind CSS icon" title="Tailwind CSS" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[12]} alt="Material UI icon" title="Material UI" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[13]} alt="Python icon" title="Python" width={80} height={80} />
                </IconCard>
                <IconCard
                    variant="secondary"
                    key={cardImages}
                    className=" flex flex-col flex-wrap items-center justify-center"
                >
                    <Image src={cardImages[14]} alt="Django icon" title="Django" width={80} height={80} />
                </IconCard>
            </section>
        </section>
    );
};

export default GridIcons;
