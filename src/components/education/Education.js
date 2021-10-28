import React from "react";
import Title from "../../common/title/Title";
import { getKey } from "../../translations";

function Education({ lang }) {
  return (
    <div>
      <div className="wrapper-item__title">
        <Title
          className="wrapper-item__title"
          name={getKey(lang, "education.title")}
          height="25px"
          imgUrl="mortarboard"
          title={true}
          fill="#2980B9"
        />
      </div>
      <div className="mt-2 px-2 d-flex flex-column">
        <h6>{getKey(lang, "education.school")}</h6>
        <p>{getKey(lang, "education.major")}</p>
        <p>
          {getKey(lang, "education.level")}. {getKey(lang, "education.gpa")}
        </p>
      </div>
    </div>
  );
}

export default Education;
