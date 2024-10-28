import { useLang } from "@/context/useLang"
import Github from "@/icons/github"
import ExternalLink from "@/icons/link"
import Image from "next/image"
import { Revel } from "../Revel"
import Link from "next/link"

export type ProjectType = {
  title: string
  descriptionEn: string
  descriptionPt: string
  imgPath: string
  gitHubLink?: string
  externalLink?: string
  stack: string[]
}

const Project = ({project}: { project: ProjectType }) => {
  const { lang } = useLang();

  return (
    <div className=" w-[85%] min-h-[500px] h-[70%] flex flex-col gap-4">
      <div className="w-full h-[100%] bg-[#232323] rounded-2xl relative">
        <Link href={project.externalLink ?? project.gitHubLink ?? "#"}>
          <Image
            className="w-2/3 h-4/5 absolute top-[20%] left-[17%] rounded-t-2xl hover:rounded-2xl 
        hover:scale-105 hover:-translate-y-3 hover:rotate-3 transition-all duration-200"
            src={project.imgPath} alt="white" width={1918} height={873} />
        </Link>
      </div>

      <Revel>
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <h3 className="font-bold text-2xl">{project.title}</h3>
          <div className="w-3/4 bg-[#313233] h-[2px]"></div>
          {
            project.gitHubLink &&
            <Github link={project.gitHubLink} width={40} height={40} />
          }
          {
            project.externalLink &&
            <ExternalLink link={project.externalLink} width={40} height={40} />
          }
        </div>
      </Revel>

      <Revel>
        <div className="w-full">
          <p className="text-primary text-lg">{project.stack.join("- ")}</p>
        </div>
      </Revel>

      <Revel>
        <div className="font-extralight text-xl">
          {!lang ? project.descriptionEn : project.descriptionPt}
        </div>
      </Revel>
    </div>

  )
}


export default function Projects({ projects }: { projects: ProjectType[] }) {
  const { lang } = useLang();

  return (
    <div id="projects" className="min-h-full w-full flex flex-col items-center justify-center gap-6">

      <div className="w-full px-4 md:px-0 md:w-2/3 flex items-center gap-4"> 
        <div className="w-[50%] md:w-2/3 bg-[#313233] h-[2px]"></div>
        <h1 className="font-black text-5xl md:text-7xl">
          {!lang ? "Projects" : "Projetos"}
          <span className="text-primary">.</span>
        </h1>
      </div>


      <div className="w-full md:w-2/3 px-4">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>

    </div>
  )
}
