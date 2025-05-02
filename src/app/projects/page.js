import { getAllProjectData } from "@/lib/projectFinder"
import { getProjectData } from "@/lib/projectFinder"

const ProjectPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>Little apps or projects which may be solo or collaborative.</p>
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