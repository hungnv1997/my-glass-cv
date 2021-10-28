import React from "react";
import avatar from "../../asset/img/logo.jpg";
function Ava() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <img className="site__ava mt-3" src={avatar} alt="" />
      <h3 className="mt-1">Nguyễn Việt Hưng</h3>
      <h6 className="mt-1">Front-end Dev</h6>
    </div>
  );
}

export default Ava;
