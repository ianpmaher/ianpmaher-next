// lib/posts.js
import projectList from "./projectList";

const projectsData = projectList;

export function getAllProjectData() {
  return projectsData.map((data) => {
    return {
      ...data,
      tags: data.tags || [],
      id: data.id,
      title: data.title,
      slug: data.slug,
      description: data.description,
      github: data.github,
      live: data.live,
      image: data.image,
    };
  });
}

export async function getProjectData(slug) {
  const project = projectsData.find((project) => project.slug === slug);
  return {
    ...project.data,
    tags: project.tags,
    id: project.id,
    title: project.title,
    slug: project.slug,
    description: project.description,
    github: project.github,
    live: project.live,
    image: project.image,
  };
}
