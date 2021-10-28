const INIT_STATE = "vi";
const langReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return action.payload.lang;

    default:
      return state;
  }
};
export default langReducer;
