import Mail from "@/icons/mail";
import Link from "next/link";
import { useState } from "react";
import { Revel } from "../Revel";
import { useLang } from "@/context/useLang";

export default function Contact() {
    const [hover, setHover] = useState(false);
    const {lang} = useLang();

    return (
        <div id="contact" className="w-full h-full flex flex-col items-center justify-center gap-4">
            <Revel>
                <h1 className="text-8xl font-black">
                    {!lang ? "Contact" : "Contato"}
                    <span className="text-primary">.</span>
                </h1>
            </Revel>
            <Revel>
                <p className="text-2xl font-extralight">
                    {!lang ? "Send me a email if you want to connect! You can also find me on" : "Envie-me um email se você quiser me conectar! Você também pode encontrar-me no "}
                    <Link target="_blank" className="text-primary hover:underline" href={"https://www.linkedin.com/in/andrerimes/"}>
                        {" Linkedin"}
                    </Link>.
                </p>
            </Revel>
            <Revel>
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="flex items-center gap-2">
                    <Mail isHover={hover} height={25} width={25} />
                    <Link target="_blank" className={`text-2xl font-semibold ${hover ? "text-primary" : ""} `} href={"mailto:andre.2004.rimes@gmail.com"}>
                        andre.2004.rimes@gmail.com
                    </Link>
                </div>
            </Revel>
        </div>

    )

}