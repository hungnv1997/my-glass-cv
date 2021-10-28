import React from "react";
import Title from "../../common/title/Title";
import { getKey } from "../../translations";

function Contact({ lang }) {
  return (
    <div className="container text-white my-3">
      <div className="row">
        <div className="col-12">
          <Title
            name={getKey(lang, "contact.title")}
            imgUrl="id-card"
            height="25px"
            title={true}
            fill="white"
          />
        </div>
      </div>
      <div className="site-contact__description mt-2">
        <div className="row">
          <div className="col-12">
            <Title
              name="hung.nv155790.hust@gmail.com"
              imgUrl="mail"
              height="18px"
              fill="white"
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-12 flex-wrap d-flex justify-content-between align-items-center">
            <Title
              name="13/04/1997"
              imgUrl="calendar"
              height="18px"
              fill="white"
            />
            <Title
              name={getKey(lang, "contact.location")}
              imgUrl="map-locator"
              height="18px"
              fill="white"
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 flex-wrap d-flex justify-content-between align-items-center">
            <Title
              name="03479471370"
              imgUrl="phone-call"
              height="18px"
              fill="white"
            />

            <Title
              name={getKey(lang, "contact.gender")}
              imgUrl="gender"
              height="18px"
              fill="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
