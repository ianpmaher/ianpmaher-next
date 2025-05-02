import { getAllProjectData } from "@/lib/projectFinder"
import { getProjectData } from "@/lib/projectFinder"

const ProjectPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>Little apps or projects which may be solo or collaborative.</p>
      <p>Click on a project to see more details.</p>

      {/* List of projects */}

      <p>And this is something i wanted to show </p>
      <p>Here is a list of all my projects:</p>
      
      {/* Render the list of projects */}

      <div style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
        <h2>Featured Project</h2>
        <p>Check out this highlighted project:</p>
        <a href={`/projects/featured`} style={{ color: "#0070f3", textDecoration: "none" }}>
          <strong>Featured Project Title</strong>
        </a>
      </div>
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