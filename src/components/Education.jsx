import React from "react";
export default function Education({educationHeader}) {
  return (
        <section className="education" id="education">
            <div className="education-inner">
                <header className="section-header">
                <h2>{educationHeader}</h2>
                <div className="section-header-underline"></div>
                </header>

                <div className="edu-content">

                <div className="edu-body">
                    <p className="edu-lead">Studies</p>

                    <div className="edu-list">
                      <p >
                        📚 Higher Secondary Education:
                        <br />
                        From: <span className="highlighted"> Saraswati Hindi Vidya Mandir</span>,
                        <br />
                        Sachin, Surat,
                        <br />
                        Percentage:<span className="highlighted">72%</span>,
                        <br />
                        Year: 2024.</p>
                      <p>
                        🎓 Graduation:
                        <br />
                        Pursuing Bachelor’s degree at <a href="https://www.srki.ac.in/"><span className="highlighted">Sree Ramkrishna Institute of Technology in Computer Application and Applied Science</span></a>.
                        <br /> 
                        Currently in 2nd year, | CGPA of <span className="highlighted">8.86</span> (as of last year).
                        <br />
                        Expected graduation: 2027.
                      </p>
                    </div>
                </div>
                </div>
    </div>
    </section>
          )
        }