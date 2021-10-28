import React from "react";
import Title from "../../common/title/Title";
import { getKey } from "../../translations";

function Experience({ lang }) {
  return (
    <div>
      <div className="wrapper-item__title">
        <Title
          className="wrapper-item__title"
          name={getKey(lang, "experience.title")}
          height="25px"
          imgUrl="certificate"
          title={true}
          fill="#2980B9"
        />
      </div>
      <div className="mx-2 pt-2">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ad
          totam alias quam officiis magni quidem omnis illo beatae, id sed
          soluta perferendis ipsum quia non ut rerum exercitationem enim.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ad
          totam alias quam officiis magni quidem omnis illo beatae, id sed
          soluta perferendis ipsum quia non ut rerum exercitationem enim.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ad
          totam alias quam officiis magni quidem omnis illo beatae, id sed
          soluta perferendis ipsum quia non ut rerum exercitationem enim.
        </p>
      </div>
    </div>
  );
}

export default Experience;
