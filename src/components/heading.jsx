import React from "react";
export default function SectionHeading({sectionHeader}){
    return(
    <header className="section-header">
      <h2>{sectionHeader}</h2>
      <div className="section-header-underline"></div>
    </header>
    )
}