import Image from "next/image";
import IconCard from "./IconCard";
import projectsList from "@/lib/projectList";
import Button from "./Button";
import Link from "next/link";
import ProjectTags from "./ProjectTags";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { BentoGrid, BentoItem } from "../shared/BentoGrid";

const githubIcon = "/assets/github-icon.svg";
const newWindowIcon = "/assets/new-window.svg";

const Projects = (props) => {
  // needed here to avoid client/server component data error
  const jsonData = JSON.parse(JSON.stringify(projectsList));
  const listItems = jsonData.map((project) => (
    <BentoItem key={project.id} gridCols={project.gridCols} rowHeight={project.rowHeight} className="">
      <IconCard variant="container">
        <div className="w-auto h-auto mx-auto mb-1">
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={900}
            placeholder="blur"
            loading="lazy"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
            className="hover:scale-150 transition-all duration-1000 ease-in-out hover:shadow-2xl md:max-h-96 md:w-auto w-full"
          />
        </div>
        <IconCard variant="projects">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <div className="m-2" />
          <p>{project.description}</p>
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
                <GitHubLogoIcon className="md:w-8 md:h-8 hover:transform hover:scale-110 transition-all duration-75 ease-in-out" />
              </Button>
            </Link>
            {project.github2 && (
              <Link
                href={project.github2}
                aria-label="Backend"
                title={project.title}
                target="__blank"
                rel="noreferrer noopener"
              >
                <Button variant="projects">
                  Backend
                  <GitHubLogoIcon className="md:w-8 md:h-8 hover:transform hover:scale-110 transition-all duration-75 ease-in-out" />
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
                <OpenInNewWindowIcon
                  className="md:w-8 md:h-8 hover:transform hover:scale-110 transition-all duration-75 ease-in-out"
                  title="open in new window"
                  aria-label="open in new window"
                />
              </Button>
            </Link>
          </span>
        </IconCard>
      </IconCard>
    </BentoItem>
  ));
  return (
    <div id="projects" className="">
      <BentoGrid gridCols={3} rowHeight={150}>
        {projectsList.map((project) => (
          <BentoItem key={project.id} gridCols={project.gridCols} rowHeight={project.rowHeight}>
            <IconCard variant="container">
              <div className="w-auto h-auto mx-auto mb-1">
                <Link href={`/projects/${project.slug}`} aria-label="link to project detail" >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={900}
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                  className="active:scale-150 transition-all duration-1000 ease-in-out hover:shadow-2xl md:max-h-96 md:w-auto w-full"
                />
                </Link>
              </div>
              <IconCard variant="projects">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <div className="m-2" />
                  <p>{project.description}</p>
                  <div className="m-2" />
                  <ProjectTags tags={project.tags} />
                <div className="m-2" />
                <span className="flex flex-row items-center justify-center text-center">
                  <Link
                    href={project.github}
                    aria-label="GitHub"
                    title={project.title}
                    target="__blank"
                    rel="noreferrer noopener"
                  >
                    <Button variant="projects">
                      Frontend
                      <GitHubLogoIcon className="md:w-8 md:h-8 hover:scale-110 transition-all duration-75" />
                    </Button>
                  </Link>
                  {project.github2 && (
                    <Link
                      href={project.github2}
                      aria-label="Backend"
                      title={project.title}
                      target="__blank"
                      rel="noreferrer noopener"
                    >
                      <Button variant="projects">
                        Backend
                        <GitHubLogoIcon className="md:w-8 md:h-8 hover:scale-110 transition-all duration-75" />
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
                      <OpenInNewWindowIcon className="md:w-8 md:h-8 hover:scale-110 transition-all duration-75" />
                    </Button>
                  </Link>
                </span>
              </IconCard>
            </IconCard>
          </BentoItem>
        ))}
      </BentoGrid>
    </div>
  );
};

export default Projects;
