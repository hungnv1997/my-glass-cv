import React from "react";
import Title from "../../common/title/Title";
import { getKey } from "../../translations";

function Skills({ lang }) {
  return (
    <div className="container site-skills text-white my-3">
      <div className="row">
        <div className="col-md-12">
          <Title
            name={getKey(lang, "skills.title")}
            title={true}
            height="25px"
            fill="white"
            imgUrl="settings"
          />
        </div>
      </div>
      <div className="row">
        <ul className="list-skills mt-2 px-5">
          <li className="list-skills__item">HTML/CSS/Js</li>
          <li className="list-skills__item">
            SCSS/Bunma Css/Boostrap/Material UI
          </li>
          <li className="list-skills__item">ReactJs</li>
          <li className="list-skills__item">Redux/Redux Toolskit/Redux Saga</li>
          <li className="list-skills__item">Git/Github/Gitlab</li>
          <li className="list-skills__item">RestfulApi/GraphApi</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
