import Image from "next/image";
import bg from '../../../public/background/about-background.png'
import { ProjectsList, RenderModel } from "@/components";
import HatModel from "@/components/Models/HatModel/HatModel";
import { AboutDetails } from "@/components";

export default function Projects() {
  return (
    <>
     <Image src={bg} alt="background-image"  className="fixed w-full h-full object-cover object-center -z-50 opacity-25 top-0 left-0"/>
     <div className='w-full h-3/5 xs:3/4 sm:h-screen absolute top-1/2 -tranlate-y-1/2 lef-0'>
     <RenderModel className={''} >
        <HatModel />
     </RenderModel>
     </div>

     <div className="relative w-full h-screen flex flex-col items-center justify-center">
     <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="font-bold text-6xl  sm:text-8xl  xs:text-7xl lg:text-9xl text-accent ">AriyanSalari</h1>
        <p className="font-light text-foreground text-lg">Meet the wizard behind this portfolio</p>
     </div>
     </div>

    <AboutDetails/>
    </>
  );
}
