import React from "react";
import SectionHeading from "./heading";
export default function Achievements({achivementTitle}) {
    return (
        <section className="achievements" id="achievements">
            <div className="ach-inner">
                <SectionHeading sectionHeader={achivementTitle} />
                {/*  Row 1 */}
                <article className="ach-row ach-row--alt">
                <div className="ach-text">
                    <h3 className="ach-title"> <u>Developed a Fully Functional Tattoo Studio Website</u></h3>
                    <p>- Built and maintaining a fully responsive and dynamic tattoo studio website from scratch using HTML, CSS, and JavaScript, with backend integration through Firebase for real-time data management. 
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
            </div>
        </section>
    )
}