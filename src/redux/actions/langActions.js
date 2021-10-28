export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {
      text: text,
    },
  };
};
export const setLanguage = (lang) => ({
  type: "SET_LANGUAGE",
  payload: {
    lang: lang,
  },
});
