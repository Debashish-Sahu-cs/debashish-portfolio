import React from "react";
export default function Achievements({achivementHeader}) {
  return (
        <section className="achievements" id="achievements">
        <div className="ach-inner">
            <header className="section-header">
            <h2>{achivementHeader}</h2>
            <div className="section-header-underline long-underline"></div>
            </header>

            {/*  Row 1 */}
            <article className="ach-row ach-row--alt">
            <div className="ach-text">
                <h3 className="ach-title"> <u>Developed a Fully Functional Tattoo Studio Website</u></h3>
                <p>
                    - Built and maintaining a fully responsive and dynamic tattoo studio website from scratch using HTML, CSS, and JavaScript, with backend integration through Firebase for real-time data management. 
                    <br />
                    - The website allows users to explore tattoo designs, learn about art, and submit booking or contact requests directly to the owner.
                    <br />
                    - This project demonstrates my ability to design clean, modern user interfaces, ensure smooth user experience across all screen sizes, and integrate dynamic functionality without relying on heavy frameworks. 
                    <br />
                    - Live at: <a href="https://newdreamtattooz.netlify.app/" className="highlighted" target="_blank" aria-label="tettoo wrbsite link" >newdreamtattooz.netlify.app</a>
                </p>
            </div>

            <div className="ach-image">
                <div className="ach-mockup">
                    <div className="mock-desktop">
                        <img src={import.meta.env.BASE_URL + "images/tattoo-website-pc.webp"}   loading="lazy" decoding="async" alt="Tattoo website view in PC " className="ach-inner-img" />
                    </div>
                    <div className="mock-mobile">
                        <img src={import.meta.env.BASE_URL + "images/tattoo-website-mobile.webp"}   loading="lazy" decoding="async" alt="Tattoo website view in mobile" className="ach-inner-img" />
                    </div>
                </div>
            </div>
            </article>

            {/*  Row 2  */}
            <article className="ach-row">
            <div className="ach-image">
                <div className="ach-mockup">
                <div className="mock-desktop">
                    <img src={import.meta.env.BASE_URL + "images/portfolio-pc.webp"}   loading="lazy" decoding="async" alt="Portfolio website view in PC" className="ach-inner-img" />
                </div>
                <div className="mock-mobile">
                    <img src={import.meta.env.BASE_URL + "images/portfolio-mobile.webp"}   loading="lazy" decoding="async" alt="Portfolio website view in mobile" className="ach-inner-img" />
                </div>
                </div>
            </div>

            <div className="ach-text">
                <h3 className="ach-title"> <u>Designed and Developed My Personal Portfolio Website</u></h3>
                <p>
                    - Created a modern, responsive, and visually engaging personal portfolio website using React.js, HTML, CSS, and JavaScript to showcase my skills, projects, and achievements. 
                    <br />
                    - The site is optimized for both desktop and mobile devices, ensuring a smooth and intuitive user experience.
                    <br />
                    - This project highlights my expertise in frontend development, responsive design, and component-based architecture. 
                    <br />
                    - It also reflects my ability to design clean layouts, implement animations, and structure a professional web presence that represents my personal brand effectively.
                </p>
            </div>
            </article>
        </div>
        </section>
          )
        }