"use client";
import { useEffect } from "react";
import Timeline from "@/components/Timeline"; // adjust path as needed
import { experienceData } from "@/data/experienceData"; // Import the data
import SkillsSection from "@components/SkillsSection"; // Import the SkillsSection component
import EducationSection from "@/components/EducationSection"; // Import the EducationSection component
import ParallaxText from "@components/ParalaxText.jsx";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from 'lenis';

import RandomGrid from "@components/RandomGrid";


export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const container = useRef();

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ['start end', 'end start']

  })

  useEffect( () => {

    const lenis = new Lenis()



    function raf(time) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

  }, [])



  return (
    <main className="app main 'overflow-hidden'">
      {/* Introduction Section */}
      <section className="flex justify-center items-center h-screen w-screen p-4">
        <RandomGrid/>
      </section>
    
      {/* Parallax Section */}
      <section className="w-screen ">
        <ParallaxText scrollYProgress={scrollYProgress}/>
      </section>

      {/* Timeline Section */}
      <section className="w-screen p-8">
        <Timeline experiences={experienceData} />
      </section>

      {/* Education Section */}
      <section className="w-screen p-8">
        <EducationSection /> {/* Add the EducationSection */}
      </section>

      {/* Skills Section */}
      <section className="w-screen p-8">
        <SkillsSection />
      </section>

      <section className="h-screen w-screen p-8">
        {/* Additional sections can go here */}
      </section>
    </main>
  );
}
