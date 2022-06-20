import React from "react";
import TopButtons from "./TopButtons/TopButtons"
import MidButtons from "./MIdButtons/midButtons";
import s from "./Buttons.module.css";

function Buttons() {
  return (
    <div className={s.container}>
      <h1 className={s.h1}>Buttons</h1>
      <TopButtons />
      <MidButtons />
    </div>
  )
}

export default Buttons;