import { getAllProjectData } from "@/lib/projectFinder"
import { getProjectData } from "@/lib/projectFinder"

const ProjectPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of the projects Ive worked on.</p>
      <ul>
        {getAllProjectData().map((project) => (
          <li key={project.slug}>
            <a href={`/projects/${project.slug}`}>{project.title}</a>
          </li>
        ))}
      </ul>

      
    </div>
  )
}

export default ProjectPage