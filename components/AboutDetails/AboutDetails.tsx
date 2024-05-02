import React from "react";
import clsx from "clsx";
const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg sm:p-8 p-6 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};
export const AboutDetails = () => {
  return (
    <section className="py-20 w-full ">
      <div className="grid grid-cols-12 xs:gap-6 gap-4 md:gap-8 w-full">
        <ItemLayout className={" col-span-full lg:col-span-8 row-span-2  flex-col "}>
          <h2 className=" text-left text-xl md:text-2xl w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            vitae voluptates. Perspiciatis fuga iusto vitae facere ullam impedit
            quasi, ab et distinctio ipsum, labore ad quod in amet quibusdam
            accusantium. Vero repellendus nihil ad quo accusantium dolores
            possimus, officiis modi alias officia, optio qui, obcaecati illo
            facilis. Dicta, nobis eveniet! Suscipit nobis culpa accusantium
            ipsam. Quos tempore culpa nobis at? Est qui repellendus magni,
            assumenda sed nemo nulla ad corporis iure quidem! Cumque hic enim
            iste? Earum qui cum deserunt velit repellat. Repellendus, dolore
            architecto est nostrum unde pariatur id! Cupiditate, cum atque sequi
            ipsa culpa ex aliquam, dolorem necessitatibus maxime vitae
            praesentium commodi sint. Hic consectetur doloremque beatae corrupti
            sint eaque doloribus est praesentium? Officia ea eveniet dolorem
            consequuntur! Veniam dicta voluptate minus sit accusantium eius,
            dignissimos nisi, facilis consequatur sint expedita nemo, soluta
            numquam unde aliquam fuga. Sunt cumque ex vel, possimus fugiat
            sapiente adipisci error expedita odio. Unde hic voluptatibus vitae
            corporis reprehenderit atque quis totam soluta beatae. Architecto
            nam non dolorem quam, facilis ipsa pariatur odit, debitis sunt
            itaque sed mollitia autem officia assumenda minus nobis. Et placeat
            nobis explicabo corporis at quam possimus consectetur sapiente
            aperiam dolor porro nam voluptatem odit, consequuntur tempore
            quaerat eaque, necessitatibus reiciendis vero. Vero fugit odit,
            quasi reiciendis modi maiores! Recusandae beatae unde pariatur fugit
            animi itaque quia facere obcaecati, incidunt alias laborum repellat
            hic eaque eius dignissimos nemo, porro omnis. Unde at recusandae ad
            perferendis dolor facilis quis quia. Corrupti exercitationem,
            aliquam perferendis distinctio mollitia dolorum facere? Harum at
         
          </p>
        </ItemLayout>
        <ItemLayout className={" col-span-full sm:col-span-6 lg:col-span-4 text-accent"}>
          <div className=" sm:text-5xl text-2xl w-full text-left font-semibold">
            25+ <sub className="font-semibold text-base">clients</sub>
          </div>
        </ItemLayout>
        <ItemLayout className={" col-span-full sm:col-span-6 lg:col-span-4 text-accent"}>
          <div className="sm:text-5xl text-2xl  w-full text-left font-semibold">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </div>
        </ItemLayout>
        <ItemLayout className={"col-span-full sm:col-span-6  !p-0"}>
          <img
            className="w-full h-auto "
            src="https://github-readme-stats.vercel.app/api/top-langs?username=anuraghazra&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto "
            src="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full "}>
          <img
            className="w-full h-auto "
            src=" https://skillicons.dev/icons?i=vscode,vite,html,css,bootstrap,sass,tailwind,mui,js,ts,react,nextjs,redux,graphql,jest,docker,threejs,nodejs,mongodb,express,postman,supabase,pycharm,babel,git,github,figma,discord,linkedin,instagram,npm,pnpm,stackoverflow,powershell"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6  !p-0"}>
          <img
            className="h-auto  w-full "
            src="https://github-readme-streak-stats.herokuapp.com?user=ariyansalari&theme=dark&hide_border=true&type=png&background=EB545400&ring=EBE62D&currStreakLabel=EBEB1B"
            alt="CodeBucks"
            loading="lazy"
          />{" "}
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6  !p-0"}>
          <img
            className="w-full h-auto "
            src="https://github-readme-stats.vercel.app/api/pin/?username=ariyansalari&repo=trainProject&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false&description_lines_count=2"
            alt="CodeBucks"
            loading="lazy"
          />{" "}
        </ItemLayout>
      </div>
    </section>
  );
};
