import React from "react";
import SectionHeading from "./heading";
export default function About({aboutTitle}){
    return (
    <section className="about-section" id="about">
  <div className="about-inner">
      <SectionHeading sectionHeader={aboutTitle} />
    <div className="about-grid">
        <div className="about-box-wrap left" id="intro">
          <div className="about-box" tabIndex="0" ><img src={import.meta.env.BASE_URL+"images/intro.svg"}   loading="lazy" decoding="async" alt="Introduction " className="about-box-icons" /></div>
        </div>
        <div className="about-text-wrap right" id="intro-text">
          <p className="about-text" >
            - I’m <span className="highlighted">Debashish Sahu</span>, a second-year B.Sc. <span className="highlighted">Computer Science</span> student and 
            an intermediate <span className="highlighted">full stack developer</span>.
            <br /> 
            - I’m passionate about building user-friendly web sites/applications with strong UI/UX design. 
            <br />
            - Currently enhancing my <span className="highlighted">DSA</span> skills to improve problem-solving, I aim to collaborate 
            with <span className="highlighted">startups</span>  and <span className="highlighted">businesses</span>  to bring their digital ideas to life.
          </p>
        </div>
        <div className="about-text-wrap left" id="skill-text">
          <p className="about-text">
            - <span className="highlighted">Frontend:</span>HTML, CSS, JavaScript, React
            <br />
            - <span className="highlighted">Backend:</span> Java (primary), familiar with Python and PHP
            <br />
            - <span className="highlighted">Databases:</span> SQL, MySQL, and learning Google Firebase
            <br />
            - Strong understanding of <span className="highlighted">full-stack</span> development
            <br />
            -Currently improving <span className="highlighted">DSA</span> for better problem-solving
            <br />
            - Good <span className="highlighted">communication</span> and <span className="highlighted">teamwork</span> skills
            <br />
            - Passionate about applying technical knowledge to real-world solutions
          </p>
        </div>
        <div className="about-box-wrap right" id="skill">
          <div className="about-box" tabIndex="0" ><img src={import.meta.env.BASE_URL+"images/skills.webp"}   loading="lazy" decoding="async" alt="Skills" className="about-box-icons" /></div>
        </div>
        <div className="about-box-wrap left" id="passion">
          <div className="about-box" tabIndex="0"><img src={import.meta.env.BASE_URL+"images/passion.webp"}  loading="lazy" decoding="async" alt="Passion" className="about-box-icons" /></div>
        </div>
        <div className="about-text-wrap right" id="passion-text">
          <p className="about-text" >
            - I’m deeply <span className="highlighted">curious</span> about technology and like turning ideas into functional 
            digital experiences. 
            <br />
            - As a computer science student, I constantly <span className="highlighted">explore new tools</span> and concepts 
            through real-world projects — from <span className="highlighted">web development</span> and <span className="highlighted">UI design</span>  to <span className="highlighted">Java</span> and <span className="highlighted">database systems</span> . 
            <br />
            - My goal is to keep learning, building, and growing as a <span className="highlighted">full stack</span> and <span className="highlighted">Java</span> developer.
          </p>
        </div>
        <div className="about-text-wrap left" id="hobbie-text">
          <p className="about-text">
            - Outside of coding, I enjoy <span className="highlighted">sketching</span>, <span className="highlighted">painting</span>, and <span className="highlighted">drawing</span>  — art helps me think <span className="highlighted">creatively</span> and improves my sense of <span className="highlighted">design</span> and <span className="highlighted">color</span>, which I apply to <span className="highlighted">UI</span>  development. 
            <br />
            - I also love <span className="highlighted">listening</span>  to <span className="highlighted">music</span>, which keeps me relaxed and inspired while working on new ideas and projects.
          </p>
        </div>
        <div className="about-box-wrap right" id="hobbie">
          <div className="about-box" tabIndex="0"><img src={import.meta.env.BASE_URL+"images/hobbies.webp"}   loading="lazy" decoding="async" alt="Hobbies" className="about-box-icons" /></div>
        </div>
    </div> 
  </div> 
</section>
    )
}