import Image from "next/image";
import IconCard from "./IconCard";
import projectsList from "@/lib/projectList";
import Button from "./Button";
import Link from "next/link";

const githubIcon = "/assets/github-icon.svg";

const Projects = (props) => {
    // needed here to avoid client/server component data error
    const jsonData = JSON.parse(JSON.stringify(projectsList));
    const listItems = jsonData.map((project) => (
        <li id="projects" key={project.id} className="min-h-fit min-w-fit">
            <IconCard variant="projects">
                <div className="w-auto h-auto mx-auto my-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="hover:scale-125 transition-all duration-1000 ease-in-out hover:shadow-2xl md:max-h-96 md:w-auto w-64"
                    />
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {/* <ProjectTags tags={project.tags} /> */}
                <br />
                <Link
                    href={project.github}
                    aria-label="GitHub"
                    title={project.title}
                    target="__blank"
                    rel="noreferrer noopener"
                >
                    <Button>
                        GitHub
                        <Image
                            src={githubIcon}
                            width={50}
                            height={50}
                            alt="github"
                            className="hover:transform hover:scale-110 transition-all duration-300"
                        />
                    </Button>
                </Link>
                {/* {project.github2 && (
                        <a
                            href={project.github2}
                            aria-label="Backend"
                            title={project.title}
                            target="__blank"
                            rel="noreferrer noopener"
                        >
                            <Button>
                                Backend
                                <GitHubIcon />
                            </Button>
                        </a>
                    )} */}
                {/* <a
                        href={project.live}
                        aria-label="Live deployment"
                        title={project.title}
                        target="__blank"
                        rel="noreferrer noopener"
                    >
                        <Button>
                            Live Site
                            <OpenInNewRoundedIcon />
                        </Button>
                    </a> */}
            </IconCard>
        </li>
    ));
    return (
        <div className="flex flex-col justify-normal items-center">
            <h1>Projects</h1>
            <ul className="flex flex-col sm:grid md:grid-cols-2 w-full place-items-center gap-5">{listItems}</ul>
        </div>
    );
};

export default Projects;
