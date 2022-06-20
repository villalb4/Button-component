import React from "react";
import buttonsData from "./buttonsData"
import "./Buttons.css"

function Buttons() {
  return (
    <div className="container">
      <h1>Buttons</h1>
      {buttonsData.map((b, i) => (
        <div key={i} className="buttons_container">
          <div className="div_buttons">
            <span>{b.title}</span>
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