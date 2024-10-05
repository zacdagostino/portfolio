"use client";
import { useEffect } from "react";
import Timeline from "@/components/Timeline"; // adjust path as needed

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  // Timeline data
  const experienceData = [
    {
      title: "Frontend Developer Intern",
      description: "Developed responsive UI components and collaborated with backend engineers.",
      date: "Jan 2023 - Jun 2023",
      stack: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Computer Science Degree",
      description: "Studied core computer science topics with a focus on web development.",
      date: "2020 - 2023",
      stack: ["JavaScript", "Python", "HTML", "CSS"],
    },
    // Add more entries as needed
  ];

  return (
    <main className="app main">
      <section className="flex justify-center items-center h-screen w-screen p-4">
        <h1 className="glow text-white text-center text-3xl sm:text-4xl font-extrabold tracking-tight">
          Hello, I'm Zac. <br /> A Fullstack Developer
        </h1>
      </section>

      {/* Update this section to dynamically adjust its height */}
      <section className="w-screen p-8">
        {/* Timeline Component */}
        <Timeline experiences={experienceData} />
      </section>
    </main>
  );
}
