import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Facts from "./pages/Facts";
import Skill from "./pages/Skill";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function Main() {
  return (
    <>
      {/* hero */}
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skill />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default Main;
