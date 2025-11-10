import React from "react";
export default function TechBar({progressPercentage, barId } ){
    return(
        <div className="bar-container"><div className="bars" id={barId}><span className="percs">{progressPercentage}%</span></div></div>
    )
}