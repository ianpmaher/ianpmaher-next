import { ScrollDiv } from "@/app/components/ScrollDiv";
import { getProjectData } from "@/lib/projectFinder";
import Image from "next/image";

const IndProjPage = async ({ params }) => {
  const project = await getProjectData(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Image src={project.image} alt={project.title} width={800} height={800} />
      
      <ScrollDiv />
    </div>
  );
};

export default IndProjPage;
