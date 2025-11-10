import React from "react";
import { Typewriter }  from 'react-simple-typewriter';
import debaimg from "./image-removebg-preview.webp" ;
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="intro">Hi, I am <span className="name">Debashish Sahu</span></p>
          <h1 className="role">I am <span className="role-highlight" >
            <Typewriter 
              words = {["a Fullstack Developer", "a Java Developer", "an Artist"]}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
             />
              </span>
        </h1>
          <p className="desc">
            I like to code, build complex projects and to enhance my problem solving skills.
            Want to implement my skills in real world problems.
          </p>
          <div className="cta-btns">
            <a className="talk-btn" target="_blank" href="https://wa.me/917043691404?text=Hi,%20I%20am%20" rel="noopener noreferrer" aria-label="lets talk">Let's Talk</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="floating-card" ><img src={debaimg} alt="Debashish Portrait" id="my-img" /></div>
        </div>
      </div>
    </section>
  )
}
