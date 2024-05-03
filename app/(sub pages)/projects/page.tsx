import Image from "next/image";
import bg from "../../../public/background/projects.avif";
import { ProjectsList, RenderModel } from "@/components";
import { projectsData } from "@/constant";
import { BmwModel } from "@/components";

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="fixed w-full h-full object-cover object-center -z-50 opacity-25 top-0 left-0"
      />
      <ProjectsList projects={projectsData} />
      <div className="flex items-center justify-center fixed   top-16 lg:top-20 left-1/2 -translate-x-1/2 lg:left-64 h-screen -z-10">
        <RenderModel className={""}>
          <BmwModel />
        </RenderModel>
      </div>
    </>
  );
}
