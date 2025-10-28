import React from "react";
import "./techpercentage.css";
export default function TechStack({ techTitle }) {
  return (
    <section className="tech-section" id="tech">
      <div className="tech-inner">
        <header className="section-header">
          <h2>{techTitle}</h2>
          <div className="section-header-underline"></div>
        </header>
        <h3>Transforming ideas into solutions with this stack of powerful technologies.</h3>

        <div className="tech-grid">
          {/*  Column 1 */}
          <div className="tech-col" data-col="0">
            <div className="col-title"><u>Languages</u></div>
            <div className="carousel">
              <div className="viewport">
                <div className="track pos">
                  <div className="card">
                    <img src="src/images/java.webp" loading="lazy" decoding="async" alt="JAVA" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="java"><span className="percs">80%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/htmlcssjs.webp" loading="lazy" decoding="async" alt="HTML CSS JS" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="webtech"><span className="percs">85%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/Python.webp" loading="lazy" decoding="async" alt="Python" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="python"><span className="percs">55%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/php.webp" loading="lazy" decoding="async" alt="PHP" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="php"><span className="percs">50%</span></div></div>
                  </div>
                </div>
                <div className="track pos" aria-hidden="true">
                  <div className="card">
                    <img src="src/images/java.webp" loading="lazy" decoding="async" alt="JAVA" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="java"><span className="percs">80%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/htmlcssjs.webp" loading="lazy" decoding="async" alt="HTML CSS JS" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="webtech"><span className="percs">85%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/Python.webp" loading="lazy" decoding="async" alt="Python" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="python"><span className="percs">55%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/php.webp" loading="lazy" decoding="async" alt="PHP" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="php"><span className="percs">50%</span></div></div>
                  </div>
                </div>
                <div className="track pos" aria-hidden="true">
                  <div className="card">
                    <img src="src/images/java.webp" loading="lazy" decoding="async" alt="JAVA" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="java"><span className="percs">80%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/htmlcssjs.webp" loading="lazy" decoding="async" alt="HTML CSS JS" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="webtech"><span className="percs">85%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/Python.webp" loading="lazy" decoding="async" alt="Python" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="python"><span className="percs">55%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/php.webp" loading="lazy" decoding="async" alt="PHP" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="php"><span className="percs">50%</span></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Column 2  */}
          <div className="tech-col" data-col="1">
            <div className="col-title"><u>Frameworks</u></div>
            <div className="carousel">
              <div className="viewport">
                <div className="track neg">
                  <div className="card">
                    <img src="src/images/React.webp" loading="lazy" decoding="async" alt="ReactJs" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="react"><span className="percs">65%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/bootstrap.webp" loading="lazy" decoding="async" alt="Bootstrap" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="bootstrap"><span className="percs">78%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/telwind.webp" loading="lazy" decoding="async" alt="Telwind CSS" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="telwind"><span className="percs">66%</span></div></div>
                  </div>
                </div>
                <div className="track neg" aria-hidden="true">
                  <div className="card">
                    <img src="src/images/React.webp" loading="lazy" decoding="async" alt="ReactJs" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="react"><span className="percs">65%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/bootstrap.webp" loading="lazy" decoding="async" alt="Bootstrap" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="bootstrap"><span className="percs">78%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/telwind.webp" loading="lazy" decoding="async" alt="Telwind CSS" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="telwind"><span className="percs">66%</span></div></div>
                  </div>
                </div>
                <div className="track neg" aria-hidden="true">
                  <div className="card">
                    <img src="src/images/React.webp" loading="lazy" decoding="async" alt="ReactJs" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="react"><span className="percs">65%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/bootstrap.webp" loading="lazy" decoding="async" alt="Bootstrap" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="bootstrap"><span className="percs">78%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/telwind.webp" loading="lazy" decoding="async" alt="Telwind CSS" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="telwind"><span className="percs">66%</span></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Column 3  */}
          <div className="tech-col" data-col="2">
            <div className="col-title"><u>Database</u></div>
            <div className="carousel">
              <div className="viewport">
                <div className="track pos">
                  <div className="card">
                    <img src="src/images/sql.webp" loading="lazy" decoding="async" alt="SQL" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="sql"><span className="percs">90%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/mysql.webp" loading="lazy" decoding="async" alt="MySQL" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="mysql"><span className="percs">72%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/firebase.webp" loading="lazy" decoding="async" alt="Firebase" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="firebase"><span className="percs">40%</span></div></div>
                  </div>
                </div>
                <div className="track pos" aria-hidden="true">
                  <div className="card">
                    <img src="src/images/sql.webp" loading="lazy" decoding="async" alt="SQL" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="sql"><span className="percs">90%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/mysql.webp" loading="lazy" decoding="async" alt="MySQL" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="mysql"><span className="percs">72%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/firebase.webp" loading="lazy" decoding="async" alt="Firebase" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="firebase"><span className="percs">40%</span></div></div>
                  </div>
                </div>
                <div className="track pos" aria-hidden="true">
                  <div className="card">
                    <img src="src/images/sql.webp" loading="lazy" decoding="async" alt="SQL" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="sql"><span className="percs">90%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/mysql.webp" loading="lazy" decoding="async" alt="MySQL" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="mysql"><span className="percs">72%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/firebase.webp" loading="lazy" decoding="async" alt="Firebase" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="firebase"><span className="percs">40%</span></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Column 4  */}
          <div className="tech-col" data-col="3">
            <div className="col-title"><u>Tools</u></div>
            <div className="carousel">
              <div className="viewport">
                <div className="track neg">
                  <div className="card">
                    <img src="src/images/github.webp" loading="lazy" decoding="async" alt="GitHub" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="github"><span className="percs">58%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/netlify.webp" loading="lazy" decoding="async" alt="Netlify" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="netlify"><span className="percs">74%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/vscode.webp" loading="lazy" decoding="async" alt="VS Code" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="vscode"><span className="percs">89%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/figma.webp" loading="lazy" decoding="async" alt="Figma" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="figma"><span className="percs">81%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/canva.webp" loading="lazy" decoding="async" alt="Canva" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="canva"><span className="percs">76%</span></div></div>
                  </div>
                </div>
                <div className="track neg" aria-hidden="true">
                  <div className="card">
                    <img src="src/images/github.webp" loading="lazy" decoding="async" alt="GitHub" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="github"><span className="percs">58%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/netlify.webp" loading="lazy" decoding="async" alt="Netlify" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="netlify"><span className="percs">74%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/vscode.webp" loading="lazy" decoding="async" alt="VS Code" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="vscode"><span className="percs">89%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/figma.webp" loading="lazy" decoding="async" alt="Figma" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="figma"><span className="percs">81%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/canva.webp" loading="lazy" decoding="async" alt="Canva" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="canva"><span className="percs">76%</span></div></div>
                  </div>
                </div>
                <div className="track neg" aria-hidden="true">
                  <div className="card">
                    <img src="src/images/github.webp" loading="lazy" decoding="async" alt="GitHub" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="github"><span className="percs">58%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/netlify.webp" loading="lazy" decoding="async" alt="Netlify" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="netlify"><span className="percs">74%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/vscode.webp" loading="lazy" decoding="async" alt="VS Code" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="vscode"><span className="percs">89%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/figma.webp" loading="lazy" decoding="async" alt="Figma" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="figma"><span className="percs">81%</span></div></div>
                  </div>
                  <div className="card">
                    <img src="src/images/canva.webp" loading="lazy" decoding="async" alt="Canva" className="tech-icon"   />
                    <div className="bar-container"><div className="bars" id="canva"><span className="percs">76%</span></div></div>
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
