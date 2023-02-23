const initialState = {
  counter: 0
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "INCREMENT_BY_VALUE":
      if (state.counter === 0) {
        return {
          ...state,
          counter: state.counter + 5
        };
      }
      if (state.counter !== 0) {
        return {
          ...state,
          counter: state.counter + state.counter
        };
      }
      break;
    case "RESET_COUNTER_SUCCESS":
      return {
        ...state,
        counter: 0
      };
    default: {
      return state;
    }
  }
};

export default Reducer;
