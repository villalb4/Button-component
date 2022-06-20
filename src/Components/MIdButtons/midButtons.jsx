import React from "react";
import {midButtons, midButtons_icon} from "./midButtonsData"
import s from "./MidButtons.module.css"

function MidButtons() {
  return (
    <div className={s.midButtons_container}>

      <div className={s.midButtons_div}>
        {midButtons.map((m, i) => (
          <React.Fragment key={i}>
            <div>
              <span className={s.title}>{m.title}</span>
              <div>
                <button>{m.value}</button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className={s.midButtonsIcon_div}>
        {midButtons_icon.map((m, i) => (
          <React.Fragment key={i}>
            <div>
              <span className={s.title}>{m.title}</span>
              <div>
                <button>{m.value}</button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default MidButtons