const initialState = {
  data: null,
  isLoading: false,
  error: false
};

const AxiosReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case "AXIOS_FETCH":
      return {
        ...state, 
        isLoading: true
      }
    case "AXIOS_FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
      case "AXIOS_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export { initialState }; 
export default AxiosReducer;