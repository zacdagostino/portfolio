"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="app main">
      <section className="flex justify-center items-center h-screen w-screen border border-gray-400 p-4">
        <h1 className="glow text-black text-center text-3xl sm:text-4xl font-extrabold tracking-tight">
          Hello, im Zac. <br /> A Fullstack developer
        </h1>
      </section>
      <section className="h-screen w-screen justify-center items-center">
      
      </section>
    </main>
  );
}
