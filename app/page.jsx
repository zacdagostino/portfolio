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
      title: 'Frontend Developer Intern',
      description: 'Developed responsive UI components and collaborated with backend engineers.',
      date: 'Jan 2023 - Jun 2023',
      stack: ['React', 'CSS', 'JavaScript'],
    },
    {
      title: 'Computer Science Degree',
      description: 'Studied core computer science topics with a focus on web development.',
      date: '2020 - 2023',
      stack: ['JavaScript', 'Python', 'HTML', 'CSS'],
    },
    {
      title: 'Freelance Web Developer',
      description: 'Built and maintained websites for small businesses.',
      date: 'Aug 2020 - Present',
      stack: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    },
    {
      title: 'Fullstack Developer Bootcamp',
      description: 'Completed a rigorous bootcamp focusing on MERN stack development.',
      date: '2022',
      stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      title: 'React Native Developer',
      description: 'Developed mobile applications for both iOS and Android using React Native.',
      date: 'Mar 2021 - Aug 2021',
      stack: ['React Native', 'Expo', 'JavaScript'],
    },
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
      <section className="h-screen w-screen p-8">

      </section>
    </main>
  );
}
