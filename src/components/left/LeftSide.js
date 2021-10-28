import React from "react";
import Ava from "../ava/Ava";
import Contact from "../contact/Contact";
import Skills from "../skills/Skills";

function LeftSide({ lang }) {
  // console.error(lang, "_________________>");
  return (
    <div className="site__left-side">
      <Ava lang={lang} />
      <Contact lang={lang} />
      <Skills lang={lang} />
    </div>
  );
}

export default LeftSide;
