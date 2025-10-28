import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import TechStack from "./components/techStack";
import Projects from "./components/projects";
import Achievements  from "./components/achievement";
import Education from "./components/Education";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
      <Hero />
        <About aboutHeader = "<About Me/>"/>
        <TechStack techTitle = "<Tech Stack/>"/>
        <Projects projectTitle = "<Projects/>" />
        <Achievements achivementHeader="<Achievements/>" />
        < Education educationHeader="<Education/>" />
        <Footer />
      </main>
    </div>
  );
}
