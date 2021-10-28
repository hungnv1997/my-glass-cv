// import Title from "./common/title/Title";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./components/wrapper/Wrapper";
// import { setLanguage } from "./redux/actions/langActions";
import { getKey } from "./translations";

function App() {
  //state redux
  const lang = useSelector((state) => state.lang);
  //dispatch
  const dispatch = useDispatch();
  //handle event
  const handleChangeLang = (e) => {
    //get value -> dispatch

    dispatch({
      type: "SET_LANGUAGE",
      payload: {
        lang: e.target.value,
      },
    });
    // dispatch(setLanguage({ lang: valueSelectLang }));
  };
  return (
    <div className="app">
      <div className="container mt-1">
        <div className="row">
          <div className="col-2">
            <select
              onChange={(e) => {
                handleChangeLang(e);
              }}
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected value="vi">
                {getKey(lang, "select.vi")}
              </option>
              <option value="en">{getKey(lang, "select.en")}</option>
            </select>
          </div>
        </div>
      </div>
      <Wrapper className="app__wrapper" />
      <div className="app__circle-1"></div>
      <div className="app__circle-2"></div>
    </div>
  );
}

export default App;
