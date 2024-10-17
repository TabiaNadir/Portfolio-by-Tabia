"use client";
import Hero from "@/component/Hero";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";
import Contact from "@/component/Contact";
import About from "@/component/About";
import AOS from "aos"
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
   AOS.init({
    easing:"ease-out-back",
    duration: 1200,
    delay: 100,
    mirror: true,
    anchorPlacement: "bottom-bottom",
    offset: 160,
  });
  AOS.refresh()
  }, []);

  return (
    <main>
      <Hero />
      <Projects /> 
      <Skills />
      <Contact />
      <About />
    </main>
  );
};
