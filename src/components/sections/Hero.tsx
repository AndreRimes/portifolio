import { useState } from "react";
import { Revel } from "../Revel";
import { Button } from "../ui/button";
import { useLang } from "@/context/useLang";

export default function Hero() {
  const { lang } = useLang()

  return (
    <>
      <div className="flex justify-center flex-col px-5 w-full md:px-0 md:h-2/3 md:w-2/3 gap-4 z-10">
        <Revel>
          <h1 className="text-5xl md:text-8xl font-black">
            {!lang ? "Hey, I'm Andre" : "Ola, Eu sou o Andre"}
            <span className="text-primary">.</span> </h1>
        </Revel>
        <Revel>
          <h2 className="text-2xl md:text-3xl font-normal">
            {!lang ? "I'm a " : "Eu sou um "}
            <span className="text-primary font-bold">Full Stac Developer</span>
          </h2>
        </Revel>
        <Revel>
          <p className="text-xl w-3/ md:text-xl md:w-2/3 font-extralight">
            {!lang ? `
            I've spent the last 2 years building some pretty cool software for companies, school and as a hobby.
           Incase you got intrested. Let's connect!
            `: "Eu passei os ultimos 2 anos construindo softwares legal para empresas, Universidade e como um hobby. Caso você tenha interesse. Vamos conectar!"}
          </p>
        </Revel>
        <Revel>
          <Button className="w-1/3 md:w-1/6 h-10 md:h-12 text-lg" variant={"default"}>{!lang ? "Contact Me" : "Contate-me"}</Button>
        </Revel>
      </div>
      <Dots />
    </>
  )
}

const Dots = () => {

  return (
    <div className="w-fit h-fit absolute translate-x-[10vw] z-0 hidden md:block">
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(24, minmax(0, 1fr))` }}
      >
        {Array.from({ length: 24* 20 }).map((_, index) => (
          <Dot key={index} />
        ))}
      </div>
    </div>
  )
}

const Dot = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="flex items-center justify-center w-5 h-5 hover:bg-[#474749] cursor-context-menu rounded-full">
      <div className={`${isHovering ? 'bg-primary' : 'bg-[#474749]'} cursor- w-[10px] h-[10px] rounded-full `}>
      </div>
    </div>
  )
}