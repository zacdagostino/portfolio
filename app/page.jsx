"use client";
import { useEffect } from "react";
import Timeline from "@/components/Timeline"; // adjust path as needed
import { experienceData } from "@/data/experienceData"; // Import the data


export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

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
      <section className="h-screen w-screen p-8">

      </section>
    </main>
  );
}
