import React from "react";
import SectionHeading from "./heading";
import TechBar from "./techBars";
import "./techpercentage.css";
export default function TechStack({ techTitle }) {
  return (
    <section className="tech-section" id="tech">
      <div className="tech-inner">
        <SectionHeading sectionHeader={techTitle} />
        <h3>Transforming ideas into solutions with this stack of powerful technologies.</h3>
        <div className="tech-grid">
          <div className="tech-col" data-col="0">
            <div className="col-title"><u>Languages</u></div>
            <div className="carousel">
              <div className="viewport">
                <div className="track pos">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/JAVA.webp"} loading="lazy" decoding="async" alt="JAVA" className="tech-icon"   />
                    <TechBar progressPercentage={80} barId ={"java"}  />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/htmlcssjs.webp"} loading="lazy" decoding="async" alt="HTML CSS JS" className="tech-icon"   />
                    <TechBar progressPercentage={85} barId ={"webtech"}  />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/Python.webp"} loading="lazy" decoding="async" alt="Python" className="tech-icon"   />
                    <TechBar progressPercentage={55} barId ={"python"}  />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/PHP.webp"} loading="lazy" decoding="async" alt="PHP" className="tech-icon"   />
                    <TechBar progressPercentage={50} barId ={"php"}  />
                  </div>
                </div>
                <div className="track pos" aria-hidden="true">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/JAVA.webp"} loading="lazy" decoding="async" alt="JAVA" className="tech-icon"   />
                    <TechBar progressPercentage={80} barId ={"java"}  />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/htmlcssjs.webp"} loading="lazy" decoding="async" alt="HTML CSS JS" className="tech-icon"   />
                    <TechBar progressPercentage={85} barId ={"webtech"}  />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/Python.webp"} loading="lazy" decoding="async" alt="Python" className="tech-icon"   />
                    <TechBar progressPercentage={55} barId ={"python"}  />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/PHP.webp"} loading="lazy" decoding="async" alt="PHP" className="tech-icon"   />
                    <TechBar progressPercentage={50} barId ={"php"}  />
                  </div>
                </div>
                <div className="track pos" aria-hidden="true">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/JAVA.webp"} loading="lazy" decoding="async" alt="JAVA" className="tech-icon"   />
                    <TechBar progressPercentage={80} barId ={"java"}  />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/htmlcssjs.webp"} loading="lazy" decoding="async" alt="HTML CSS JS" className="tech-icon"   />
                    <TechBar progressPercentage={85} barId ={"webtech"}  />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/Python.webp"} loading="lazy" decoding="async" alt="Python" className="tech-icon"   />
                    <TechBar progressPercentage={55} barId ={"python"}  />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/PHP.webp"} loading="lazy" decoding="async" alt="PHP" className="tech-icon"   />
                    <TechBar progressPercentage={50} barId ={"php"}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-col" data-col="1">
            <div className="col-title"><u>Frameworks</u></div>
            <div className="carousel">
              <div className="viewport">
                <div className="track neg">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/React.webp"} loading="lazy" decoding="async" alt="ReactJs" className="tech-icon"   />
                    <TechBar progressPercentage={65} barId={"react"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/Bootstrap.webp"} loading="lazy" decoding="async" alt="Bootstrap" className="tech-icon"   />
                    <TechBar progressPercentage={78} barId={"bootstrap"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/telwind.webp"} loading="lazy" decoding="async" alt="Telwind CSS" className="tech-icon"   />
                    <TechBar progressPercentage={66} barId={"telwind"} />
                  </div>
                </div>
                <div className="track neg" aria-hidden="true">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/React.webp"} loading="lazy" decoding="async" alt="ReactJs" className="tech-icon"   />
                    <TechBar progressPercentage={65} barId={"react"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/Bootstrap.webp"} loading="lazy" decoding="async" alt="Bootstrap" className="tech-icon"   />
                    <TechBar progressPercentage={78} barId={"bootstrap"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/telwind.webp"} loading="lazy" decoding="async" alt="Telwind CSS" className="tech-icon"   />
                    <TechBar progressPercentage={66} barId={"telwind"} />
                  </div>
                </div>
                <div className="track neg" aria-hidden="true">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/React.webp"} loading="lazy" decoding="async" alt="ReactJs" className="tech-icon"   />
                    <TechBar progressPercentage={65} barId={"react"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/Bootstrap.webp"} loading="lazy" decoding="async" alt="Bootstrap" className="tech-icon"   />
                    <TechBar progressPercentage={78} barId={"bootstrap"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/telwind.webp"} loading="lazy" decoding="async" alt="Telwind CSS" className="tech-icon"   />
                    <TechBar progressPercentage={66} barId={"telwind"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-col" data-col="2">
            <div className="col-title"><u>Database</u></div>
            <div className="carousel">
              <div className="viewport">
                <div className="track pos">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/sql.webp"} loading="lazy" decoding="async" alt="SQL" className="tech-icon"   />
                    <TechBar progressPercentage={90} barId={"sql"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/mysql.webp"} loading="lazy" decoding="async" alt="MySQL" className="tech-icon"   />
                    <TechBar progressPercentage={72} barId={"mysql"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/firebase.webp"} loading="lazy" decoding="async" alt="Firebase" className="tech-icon"   />
                    <TechBar progressPercentage={40} barId={"firebase"} />
                  </div>
                </div>
                <div className="track pos" aria-hidden="true">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/sql.webp"} loading="lazy" decoding="async" alt="SQL" className="tech-icon"   />
                    <TechBar progressPercentage={90} barId={"sql"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/mysql.webp"} loading="lazy" decoding="async" alt="MySQL" className="tech-icon"   />
                    <TechBar progressPercentage={72} barId={"mysql"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/firebase.webp"} loading="lazy" decoding="async" alt="Firebase" className="tech-icon"   />
                    <TechBar progressPercentage={40} barId={"firebase"} />
                  </div>
                </div>
                <div className="track pos" aria-hidden="true">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/sql.webp"} loading="lazy" decoding="async" alt="SQL" className="tech-icon"   />
                    <TechBar progressPercentage={90} barId={"sql"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/mysql.webp"} loading="lazy" decoding="async" alt="MySQL" className="tech-icon"   />
                    <TechBar progressPercentage={72} barId={"mysql"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/firebase.webp"} loading="lazy" decoding="async" alt="Firebase" className="tech-icon"   />
                    <TechBar progressPercentage={40} barId={"firebase"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-col" data-col="3">
            <div className="col-title"><u>Tools</u></div>
            <div className="carousel">
              <div className="viewport">
                <div className="track neg">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/github.webp"} loading="lazy" decoding="async" alt="GitHub" className="tech-icon"   />
                    <TechBar progressPercentage={58} barId={"github"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/netlify.webp"} loading="lazy" decoding="async" alt="Netlify" className="tech-icon"   />
                    <TechBar progressPercentage={74} barId={"netlify"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/vscode.webp"} loading="lazy" decoding="async" alt="VS Code" className="tech-icon"   />
                    <TechBar progressPercentage={89} barId={"vscode"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/figma.webp"} loading="lazy" decoding="async" alt="Figma" className="tech-icon"   />
                    <TechBar progressPercentage={81} barId={"figma"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/canva.webp"} loading="lazy" decoding="async" alt="Canva" className="tech-icon"   />
                    <TechBar progressPercentage={76} barId={"canva"} />                    
                  </div>
                </div>
                <div className="track neg" aria-hidden="true">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/github.webp"} loading="lazy" decoding="async" alt="GitHub" className="tech-icon"   />
                    <TechBar progressPercentage={58} barId={"github"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/netlify.webp"} loading="lazy" decoding="async" alt="Netlify" className="tech-icon"   />
                    <TechBar progressPercentage={74} barId={"netlify"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/vscode.webp"} loading="lazy" decoding="async" alt="VS Code" className="tech-icon"   />
                    <TechBar progressPercentage={89} barId={"vscode"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/figma.webp"} loading="lazy" decoding="async" alt="Figma" className="tech-icon"   />
                    <TechBar progressPercentage={81} barId={"figma"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/canva.webp"} loading="lazy" decoding="async" alt="Canva" className="tech-icon"   />
                    <TechBar progressPercentage={76} barId={"canva"} />                    
                  </div>
                </div>
                <div className="track neg" aria-hidden="true">
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/github.webp"} loading="lazy" decoding="async" alt="GitHub" className="tech-icon"   />
                    <TechBar progressPercentage={58} barId={"github"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/netlify.webp"} loading="lazy" decoding="async" alt="Netlify" className="tech-icon"   />
                    <TechBar progressPercentage={74} barId={"netlify"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/vscode.webp"} loading="lazy" decoding="async" alt="VS Code" className="tech-icon"   />
                    <TechBar progressPercentage={89} barId={"vscode"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/figma.webp"} loading="lazy" decoding="async" alt="Figma" className="tech-icon"   />
                    <TechBar progressPercentage={81} barId={"figma"} />
                  </div>
                  <div className="card">
                    <img src={import.meta.env.BASE_URL + "images/canva.webp"} loading="lazy" decoding="async" alt="Canva" className="tech-icon"   />
                    <TechBar progressPercentage={76} barId={"canva"} />                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
