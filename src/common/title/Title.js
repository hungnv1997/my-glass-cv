import React from "react";
import NewIcon from "../NewIcon";

function Title({ name, height, imgUrl, fill, title }) {
  return (
    <div className="title d-flex align-items-center">
      <NewIcon
        className="mx-2"
        name={imgUrl}
        height={height}
        width={height}
        fill={fill}
      />
      {title ? (
        <h5 className=" text-uppercase mb-0">{name}</h5>
      ) : (
        <p className="ml-2 mb-0">{name}</p>
      )}
    </div>
  );
}

export default Title;
