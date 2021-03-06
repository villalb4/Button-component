import React from "react";
import TopButtons from "./TopButtons/TopButtons"
import MidButtons from "./MIdButtons/midButtons";
import BotButtons from "./BotButtons/BotButtons";
import s from "./Buttons.module.css";

function Buttons() {
  return (
    <div className={s.container}>
      <h1 className={s.h1}>Buttons</h1>
      <TopButtons />
      <MidButtons />
      <BotButtons />
      <span className={s.link_icons}>Icons: https://material.io/resources/icons/?style=round</span>
      <h2 className={s.created_by}>created by <span className={s.iam}>villalb4</span> - devChallenges.io</h2>
    </div>
  )
}

export default Buttons;