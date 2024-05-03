import Image from "next/image";
import bg from '../public/background/homeBackground.avif'
import { Navigation, RenderModel } from "@/components";
import PunchManModel from "@/components/Models/PunchManModel/PunchManModel";
import { Metadata } from "next";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
     <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center -z-50 opacity-25"/>
     <div className="w-full h-screen">
      {/*  navigation and 3d model */}
     <Navigation />

<RenderModel  >
  <PunchManModel/>
</RenderModel>
     </div>
    </main>
  );
}
