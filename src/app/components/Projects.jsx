import Image from "next/image";
import IconCard from "./IconCard";
import projectsList from "@/lib/projectList";
import Button from "./Button";
import Link from "next/link";
import ProjectTags from "./ProjectTags";

const githubIcon = "/assets/github-icon.svg";
const newWindowIcon = "/assets/new-window.svg";

const Projects = (props) => {
    // needed here to avoid client/server component data error
    const jsonData = JSON.parse(JSON.stringify(projectsList));
    const listItems = jsonData.map((project) => (
        <li key={project.id} className="min-h-fit min-w-fit">
            <IconCard variant="container">
                <div className="w-auto h-auto mx-auto mb-1">
                    <Image
                        src={project.image}
                        alt={project.title}
                        placeholder="blur"
                        // priority
                        blurDataURL="data: [image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==]" // 64x64 base64 encoded}
                        className="hover:scale-150 transition-all duration-1000 ease-in-out hover:shadow-2xl md:max-h-96 md:w-auto w-full"
                    />
                </div>
                <IconCard variant="projects">
                    <h2 className=" text-2xl font-bold">{project.title}</h2>
                    <div className="m-2" />
                    <p className="">{project.description}</p>
                    <div className="m-2" />
                    <ProjectTags tags={project.tags} />
                    <div className="m-2" />
                    <span className="flex flex-row items-normal justify-center text-center text-black">
                        <Link
                            href={project.github}
                            aria-label="GitHub"
                            title={project.title}
                            target="__blank"
                            rel="noreferrer noopener"
                        >
                            <Button variant="projects">
                                Frontend
                                <Image
                                    src={githubIcon}
                                    width={30}
                                    height={30}
                                    alt="github"
                                    className="hover:transform hover:scale-110 transition-all duration-300 ease-in-out"
                                />
                            </Button>
                        </Link>
                        {project.github2 && (
                            <Link
                                href={project.github2}
                                aria-label="Backend"
                                title={project.title}
                                target="__blank"
                                rel="noreferrer noopener"
                                className=""
                            >
                                <Button variant="projects">
                                    Backend
                                    <Image
                                        src={githubIcon}
                                        width={30}
                                        height={30}
                                        alt="github icon"
                                        className="hover:transform hover:scale-110 transition-all duration-300 ease-in-out hover:blur-"
                                    />
                                </Button>
                            </Link>
                        )}
                        <Link
                            href={project.live}
                            aria-label="Live deployment"
                            title={project.title}
                            target="__blank"
                            rel="noreferrer noopener"
                        >
                            <Button variant="projects">
                                Live Site
                                <Image
                                    src={newWindowIcon}
                                    width={30}
                                    height={30}
                                    alt="open in new window"
                                    title="deployment"
                                    className="hover:transform hover:scale-110 transition-all ease-in-out duration-300"
                                />
                            </Button>
                        </Link>
                    </span>
                </IconCard>
            </IconCard>
        </li>
    ));
    return (
        <div id="projects" className="flex flex-col justify-normal items-center">
            <ul className="flex flex-col sm:grid md:grid-cols-2 w-full place-items-center gap-5">{listItems}</ul>
        </div>
    );
};

export default Projects;
