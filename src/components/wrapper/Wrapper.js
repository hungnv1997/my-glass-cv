import React from "react";
import { useSelector } from "react-redux";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import LeftSide from "../left/LeftSide";
import Projects from "../projects/Projects";

function Wrapper() {
  const lang = useSelector((state) => state.lang);
  return (
    <div className="app__wrapper container p-0 mt-5">
      <div className="row m-0">
        <div className="col-md-4 m-0 p-0">
          <LeftSide lang={lang} />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between py-5">
          <Education lang={lang} />
          <Experience lang={lang} />
          <Projects lang={lang} />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
