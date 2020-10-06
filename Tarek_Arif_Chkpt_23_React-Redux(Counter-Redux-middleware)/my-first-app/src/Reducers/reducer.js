import { INCREMENT, DECREMENT, RESET } from './actonTypes'

const intialState = {
  count: 0,
};

const reducer = (state = intialState, action) => {
  console.log("reducer", state, action);

  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };

    default:
      return state;
  }
};

export default reducer;
