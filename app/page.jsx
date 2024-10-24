"use client";
import { useEffect } from "react";
import Timeline from "@/components/Timeline"; // adjust path as needed
import { experienceData } from "@/data/experienceData"; // Import the data
import SkillsSection from "@components/SkillsSection"; // Import the SkillsSection component
import EducationSection from "@/components/EducationSection"; // Import the EducationSection component

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="app main">
      {/* Introduction Section */}
      <section className="flex justify-center items-center h-screen w-screen p-4">
        <h1 className="glow text-white text-center text-3xl sm:text-4xl font-extrabold tracking-tight">
          Hello, I'm Zac. <br /> A Fullstack Developer
        </h1>
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
