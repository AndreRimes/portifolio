import { Button } from "../ui/button"
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "../ui/select"
import { US, BR } from 'country-flag-icons/react/3x2'
import Linkedin from "@/icons/linkedin"
import Github from "@/icons/github"
import { useLang } from "@/context/useLang"
import Link from "next/link"
import { motion } from "framer-motion"



export default function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row h-full">
            <VerticalBar />
            <div className="flex flex-col flex-grow">
                <HorizontalBar />
                {children}
            </div>
        </div>
    )
}

function HorizontalBar() {
    const { setLang, lang } = useLang();

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                variants: { opacity: 1 },
            }}
            initial="hidden"
            animate="variants"
            className="w-screen flex items-center justify-between p-5 fixed z-10">
            <div className="flex items-center justify-center gap-10 basis-[16%] px-20">
                <Linkedin />
                <Github />
            </div>

            <div className="flex items-center  justify-evenly basis-1/4">
                <Link
                    href={"https://drive.google.com/file/d/1_lPGfAz602WG2xaLqollhH6Z5PRJ4mDD/view?usp=sharing"}
                    target="_blank"
                >
                    <Button variant={'outline'}>{!lang ? "My Resume" : "Meu Currículo"}</Button>
                </Link>

                <Select onValueChange={(value) => value === "portuguese" ? setLang(true) : setLang(false)} defaultValue="english">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="portuguese" className="w-full flex flex-row justify-between">
                            <div className="w-full flex flex-row items-center gap-2">
                                Portuguese
                                <BR title="United States" className="w-5 h-5" />
                            </div>
                        </SelectItem>
                        <SelectItem value="english" className="w-full flex flex-row justify-between">
                            <div className="w-full flex flex-row items-center gap-2">
                                English
                                <US title="United States" className="w-5 h-5" />
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </motion.div>
    )
}


function VerticalBar() {
    const { lang } = useLang();

    const aboutScroll = () => {
        const target = document.getElementById("about");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }

    const projectsScroll = () => {
        const target = document.getElementById("projects");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }

    const expScroll = () => {
        const target = document.getElementById("exp");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }

    const contactScroll = () => {
        const target = document.getElementById("contact");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }

    const heroScroll = () => {
        const target = document.getElementById("hero");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                variants: { opacity: 1, },
            }}
            initial="hidden"
            animate="variants"
            className="flex flex-col w-[5%] h-full bg-black items-center gap-4 py-2 fixed z-50" >
            <div
                onClick={heroScroll}
                className="cursor-pointer bg-[#111111] rounded-xl w-16 h-16 text-xl flex items-center justify-center p-0 font-extrabold">
                A
                <span className="text-primary">.</span>
            </div>

            <div onClick={aboutScroll} className="w-[100px] flex items-center justify-center p-6 opacity-70
            hover:opacity-100 hover:bg-[#111111] hover:border-t hover:border-primary
            transition-all duration-300 rotate-90 cursor-pointer text-xl">
                {!lang ? "About" : "Sobre"}
            </div>

            <div onClick={projectsScroll} className="w-[100px] flex items-center justify-center p-6 opacity-70 
            hover:opacity-100 hover:bg-[#111111] hover:border-t hover:border-primary
            transition-all duration-300 rotate-90 cursor-pointer text-xl">
                {!lang ? "Projects" : "Projetos"}
            </div>

            <div onClick={expScroll} className="w-[100px] flex items-center justify-center p-6 opacity-70 
            hover:opacity-100 hover:bg-[#111111] hover:border-t hover:border-primary
            transition-all duration-300 rotate-90 cursor-pointer text-xl">
                Exp
            </div>


            <div onClick={contactScroll} className="w-[100px] flex items-center justify-center p-6 opacity-70 
            hover:opacity-100 hover:bg-[#111111] hover:border-t hover:border-primary
            transition-all duration-300 rotate-90 cursor-pointer text-xl">
                {!lang ? "Contact" : "Contato"}
            </div>
        </motion.div>
    )

}