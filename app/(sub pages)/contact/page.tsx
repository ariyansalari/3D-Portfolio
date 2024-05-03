import Image from "next/image";
import bg from '../../../public/background/contact.avif'
import { ContactForm } from "@/components";


export default function Projects() {
  return (
    <>
     <Image src={bg} alt="background-image"  className="fixed w-full h-full object-cover object-center -z-50 opacity-25 top-0 left-0"/>
    <article className="relative w-full flex flex-col items-center justify-center space-x-8 py-8 sm:py-0">
<div className="flex flex-col items-center justify-center space-y-6 w-full  sm:w-3/4  mb-4">
<h1 className="text-accent font-semibold text-center text-4xl capitalize">
  Contact With me
</h1>
<p className="text-center font-light  text-sm xs:text-base">
  Hello my dear friend<br/> if you have any question or any problem on my website <br/> you can just send message to me and i wll get back soon
</p>
</div>
<ContactForm/>

    </article>

  
    </>
  );
}
