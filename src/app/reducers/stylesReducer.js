const initialState = {
  transformZValue: 0,
};

const StylesReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case "UPDATE_TRANSFORM_Z_VALUE":
      return {
        ...state, 
        transformZValue: action.payload
      }
    default:
      return state;
  }
}

export { initialState }; 
export default StylesReducer;