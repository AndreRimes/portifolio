'use client'
import Sidebar from "@/components/sections/sidebar";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Project";
import Expirience from "@/components/sections/Expirience";
import { xps, education } from "@/data/expiriences";
import { projects } from "@/data/projects";

export default function Home() {

  return (
    <Sidebar>
      <div className="flex flex-col gap-12">

        <div id="hero" className="h-[100vh] flex flex-col items-center justify-center">
          <Hero />
        </div>

        <div className="min-h-[90vh]" >
          <About />
        </div>

        <div className="min-h-[90vh] " >
          <Projects projects={projects} />
        </div>


        <div className="min-h-[90vh] flex flex-col gap-20" >
          <Expirience education={education} xps={xps} />
        </div>


        <div className="h-[90vh]" >
          <Contact />
        </div>

      </div>      
    </Sidebar>

  )
}



