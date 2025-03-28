import { useLang } from "@/context/useLang"
import { Badge } from "../ui/badge"
import { Revel } from "../Revel"

export type ExpType = {
    name: string
    position: string
    location: string
    time: string
    stack: string[]
    descriptionEn: string
    descriptionPt: string
}



const Exp = ({ exp }: { exp: ExpType }) => {
    const { lang } = useLang();

    return (
        <div key={exp.name} className="w-full flex flex-col gap-5 ">

            <div className="w-[90%] flex items-center justify-between">
                <Revel>
                    <h2 className="font-bold text-2xl">{exp.name}</h2>
                </Revel>
                <Revel>
                    <h2 className="text-xl">{exp.time} </h2>
                </Revel>
            </div>


            <div className="w-[90%] flex items-center justify-between">
                <Revel>
                    <h2 className="font-semibold text-primary text-xl">{exp.position}</h2>
                </Revel>
                <Revel>
                    <h2 className="text-xl">{exp.location}</h2>
                </Revel>
            </div>

            <Revel>
                <p className="w-[90%] text-xl font-extralight">
                    {!lang ? exp.descriptionEn : exp.descriptionPt}
                </p>
            </Revel>

            <Revel>
                <div className="grid grid-cols-4 gap-2 ">
                    {exp.stack.map((skill, index) => {
                        return (
                            <Badge key={index} className="w-fit text-lg" >{skill}</Badge>
                        )
                    })}
                </div>
            </Revel>
        </div>
    )

}

export default function Expirience({ xps, education }: { xps: ExpType[], education: ExpType[] }) {
    const { lang } = useLang();
    return (
        <div id="exp" className="min-h-full flex flex-col items-center justify-center gap-6">

            <div className="w-full px-4 md:px-0 md:w-2/3 flex items-center gap-4">
                <Revel>
                    <h1 className="font-black text-5xl md:text-7xl">
                        {!lang ? "Experience" : "Experiência"}
                        <span className="text-primary">.</span>
                    </h1>
                </Revel>
                <div className="md:w-2/3 w-[23%] bg-[#313233] h-[2px]"></div>
            </div>

            <div className="px-4 md:px-0 md:w-2/3 flex flex-col flex-grow gap-4">
                {xps.map((exp, index) => (
                    <Exp key={index} exp={exp} />
                ))}
            </div>


            <div className="w-full px-4 md:px-0 md:w-2/3 flex items-center gap-4">
                <Revel>
                    <h1 className="font-black text-5xl md:text-7xl">
                        {!lang ? "Education" : "Educação"}
                        <span className="text-primary">.</span>
                    </h1>
                </Revel>
                <div className="md:w-2/3 w-[23%] bg-[#313233] h-[2px]"></div>
            </div>


            <div className="px-4 md:px-0 md:w-2/3 flex flex-col flex-grow gap-4">
                {education.map((exp, index) => (
                    <Exp key={index} exp={exp} />
                ))}
            </div>



        </div>
    )

}