import React from "react";
import buttonsData from "./topButtonsData"
import "./TopButtons.css"

function Buttons() {
  return (
    <div> 
      {buttonsData.map((b, i) => (
        <div key={i} className="buttons_container">
          <div className="div_buttons">
            <span className="title">{b.title}</span>
            <div>
              <button className={b.style}>{b.value}</button>
            </div>
          </div>
          <div className="div_hoverButtons">
            <span className="title_hover">{b.hoverTitle}</span>
            <div>
              <button className={b.hoverStyle}>{b.value}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Buttons;