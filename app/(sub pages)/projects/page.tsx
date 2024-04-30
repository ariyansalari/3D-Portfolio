import Image from "next/image";
import bg from '../../../public/background/projects-background.png'
import { ProjectsList, RenderModel } from "@/components";
import { projectsData } from "@/constant";
import StaffModel from "@/components/Models/StaffModel/StaffModel";

export default function Projects() {
  return (
    <>
     <Image src={bg} alt="background-image"  className="fixed w-full h-full object-cover object-center -z-50 opacity-25 top-0 left-0"/>
     <ProjectsList projects={projectsData}/>
     <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">
     <RenderModel className={''} >
        <StaffModel />
     </RenderModel>
     </div>
    
    </>
  );
}
