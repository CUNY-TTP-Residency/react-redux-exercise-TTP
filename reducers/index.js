// reducers/index.js
import { INCREMENT, DECREMENT, CLEAR, INCREMENTBY5, DECREMENTBY5} from '../actions';

const initialState = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENTBY5:
      return state + 5;
    case DECREMENTBY5:
      return state - 5;
    case CLEAR:
      return 0;
    default:
      return state;
  }
};
