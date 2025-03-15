import CodeIcon from "@/icons/CodeIcon"
import Github from "@/icons/github"
import Linkedin from "@/icons/linkedin"
import { Badge } from "../ui/badge"
import SmileSvgrepoCom from "@/icons/Smile"
import { useLang } from "@/context/useLang"
import { Revel } from "../Revel"

export default function About() {

    const workSkills = ["TypeScript", "Tailwind", "Nextjs", "Nextjs", "Postgres", "Prisma", "ReactQuery", "AWS", "Docker", "Linux", "Django DRF", "Vuejs"]

    const hobbySkills = ["TypeScript", "Golang", "Nextjs", "shadcnUI", "PocketBase", "Docker", "Kubernetes", "Github Actions", "Azure", "VPS", "Nginx"]

    const { lang } = useLang();

    return (
        <div id="about" className="flex flex-col items-center justify-center gap-6 ">

            <div className="md:w-2/3 md:px-0 px-4 w-full flex items-center gap-4">
                <Revel>
                    <h1 className="font-black text-5xl md:text-7xl">
                        {lang ? "Sobre" : "About"}
                        <span className="text-primary">.</span>
                    </h1>
                </Revel>
                <div className="w-[55%] md:w-2/3 bg-[#313233] h-[2px]"></div>
            </div>

            <div className="md:w-2/3 md:px-0 px-5 w-full flex flex-col md:flex-row gap-20">
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <Revel>
                        <p className="font-extralight text-xl">
                            {
                                !lang ?
                                    "Hey I'm Andre Rimes, if you haven't already gathered that by now. I'm a Computer Science Student at Universidade de Brasilia and a software engineer with a growing passion for DevOps and Infrastructure. I specialize in both backend (primarily Node) and front-end (primarily Nextjs) development, while also exploring infrastructure automation and cloud technologies."
                                    :
                                    "Ola Eu sou o Andre Rimes, se você ainda não tiver descobrir isso ate agora :) . Eu sou um estudante de Ciência da Computação na Universidade de Brasília e engenheiro de software com uma crescente paixão por DevOps e Infraestrutura. Eu especializo tanto o backend (principalmente Node) quanto o front-end (primário Nextjs), enquanto também exploro automação de infraestrutura e tecnologias em nuvem."
                            }
                        </p>
                    </Revel>

                    <Revel>
                        <p className="font-extralight text-xl">
                            {
                                !lang ?
                                    "I am currently working for the Hex360 where i am developing my programing abilities in both front-end back end and why not some devops"
                                    :
                                    "Eu estou atualmente trabalhando na hex360 onde eu estou desenvolvendo minhas habilidades de programação tanto no front-end quanto no back-end e por que não algumas de devops"
                            }
                        </p>
                    </Revel>
                    
                    <Revel>
                        <p className="font-extralight text-xl">
                            {!lang ?
                                "Outside of work, i still try to practice programing creating fun and usefull projects to learn things that i dont have the chance to do at work or University"
                                :
                                "Fora do trabalho, eu ainda tento praticar programação criando projetos divertidos e úteis para aprender coisas que eu não tenho a chance de fazer no trabalho ou na Universidade"
                            }
                        </p>
                    </Revel>

                    <Revel>
                        <p className="font-extralight text-xl">
                            {
                                !lang ?
                                    "Feel free to reach out if you'd like to collaborate or connect! 🔗"
                                    :
                                    "Sinta-se à vontade para entrar em contato se quiser colaborar ou conectar! 🔗"
                            }
                        </p>
                    </Revel>

                    <Revel>
                        <div className="flex flex-row items-center gap-10">
                            <p className="text-xl text-primary font-medium">
                                {!lang ? "My links -> " : "Meus links -> "}
                            </p>
                            <Github />
                            <Linkedin />
                        </div>
                    </Revel>

                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-20">
                    <Revel>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center flex-row gap-3 text-2xl font-bold">
                                <CodeIcon />
                                {!lang ? "Use at work" : "Usado no trabalho"}
                            </div>
                            <div className="grid xl:grid-cols-3 grid-cols-2 gap-y-2">
                                {workSkills.map((skill, index) => {
                                    return (
                                        <Badge key={index} className="w-fit text-lg" >{skill}</Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </Revel>
                    <Revel>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center flex-row gap-3 text-2xl font-bold">
                                <SmileSvgrepoCom />
                                {!lang ? "Use as a Hobby" : "Usado como um hobby"}
                            </div>
                            <div className="grid xl:grid-cols-3 grid-cols-2 gap-y-2">
                                {hobbySkills.map((skill, index) => {
                                    return (
                                        <Badge key={index} className="w-fit text-lg" >{skill}</Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </Revel>
                </div>
            </div>

        </div>
    )
}