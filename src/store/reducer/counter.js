export const countReducer = function (
  state = { sampleData: []},
  action
) {
  switch (action.type) {
    case "global":
      return { ...state, sampleData: action.payload }
    default:
      return state;
  }
};