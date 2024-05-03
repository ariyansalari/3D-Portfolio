import Image from "next/image";
import bg from '../../../public/background/about3.jpg'
import { AboutDetails } from "@/components";

export default function Projects() {
  return (
    <>
     <Image src={bg} alt="background-image"  className="fixed w-full h-full object-cover  -z-50 opacity-25 top-0 left-0"/>

     <div className="relative w-full h-screen flex flex-col items-center justify-center">
     <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
   <Image  src={'/background/me.jpg'} width={300} height={300} alt="me"  className="rounded-lg "/>

        <h1 className="font-bold text-6xl  sm:text-8xl  xs:text-7xl lg:text-9xl text-accent select-none">AriyanSalari</h1>
     </div>
     </div>

    <AboutDetails/>
    </>
  );
}
