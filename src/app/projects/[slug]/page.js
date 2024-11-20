import { ScrollDiv } from "@/app/components/ScrollDiv";
import { getProjectData } from "@/lib/projectFinder";
import Image from "next/image";
import IconCard from "@/app/components/IconCard";
import ProjectTags from "@/app/components/ProjectTags";
import Link from "next/link";
import Button from "@/app/components/Button";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Icon } from "@radix-ui/react-select";

const IndProjPage = async ({ params }) => {
  const project = await getProjectData(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div>
      <IconCard variant="container">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={800}
          placeholder="blur"
          loading="lazy"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
          className="hover:scale-150 transition-all duration-1000 ease-in-out hover:shadow-2xl md:max-h-96 md:w-auto w-full"
        />
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
      <ScrollDiv />
    </div>
  );
};

export default IndProjPage;
