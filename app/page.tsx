import Image from "next/image";
import bg from '../public/background/home-background.png'
import { Navigation, RenderModel } from "@/components";
import WizardModel from "@/components/Models/WizardModel/WizardModel";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
     <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center -z-50 opacity-25"/>
     <div className="w-full h-screen">
      {/*  navigation and 3d model */}
     <Navigation />

<RenderModel className={undefined} >
  <WizardModel/>
</RenderModel>
     </div>
    </main>
  );
}
