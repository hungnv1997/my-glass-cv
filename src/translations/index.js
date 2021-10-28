import jsonVi from "./vi.json";
import jsonEn from "./en.json";

const viObj = jsonVi;
const enObj = jsonEn;
const langObj = {
  vi: viObj,
  en: enObj,
};

export const getKey = (lang, key) => {
  let newObj = langObj[lang];
  if (newObj[key]) {
    return newObj[key];
  } else return "---";
};
