import Image from "next/image";
import bg from '../../../public/background/contact-background.png'
import { ContactForm } from "@/components";


export default function Projects() {
  return (
    <>
     <Image src={bg} alt="background-image"  className="fixed w-full h-full object-cover object-center -z-50 opacity-25 top-0 left-0"/>
    <article className="relative w-full flex flex-col items-center justify-center space-x-8 py-8 sm:py-0">
<div className="flex flex-col items-center justify-center space-y-6 w-full  sm:w-3/4  mb-4">
<h1 className="text-accent font-semibold text-center text-4xl capitalize">
  summon the wizard
</h1>
<p className="text-center font-light  text-sm xs:text-base">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus repellat doloremque exercitationem dolor hic mollitia optio totam ex. Enim deleniti eaque maiores, nostrum ex labore vel qui nobis officia.
  Hic cum blanditiis ratione veniam enim eius atque numquam sed sequi, quia iusto autem totam ex! Nihil nobis possimus, corrupti saepe est perspiciatis labore quis commodi vitae dolorum aperiam ducimus!
  Sapiente quibusdam quo dicta consequuntur. Ipsam quisquam modi, doloremque ab libero tempora obcaecati illo et nam veritatis nisi magni ut vero sapiente consequatur ipsum iure laudantium dicta quasi. Fugiat, ullam!
  Voluptatum, excepturi quis dolores laborum corporis possimus animi quasi numquam dolore doloremque consequatur ex impedit alias. Quisquam, itaque eum excepturi, accusamus facere nulla, enim ullam harum fugit beatae aperiam magnam?
</p>
</div>
<ContactForm/>

    </article>

  
    </>
  );
}
