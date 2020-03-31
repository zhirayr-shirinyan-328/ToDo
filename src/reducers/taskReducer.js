import {
  COMPLETE_TASK,
  UNCOMPLETE_TASK,
  CREATE_TASK
} from "../actions/constants";
import data from "../data";
const initialState = {
  tasks: data
};

function taskReducer(state = initialState, action = {}) {
  const newState = { ...state };
  switch (action.type) {
    case COMPLETE_TASK:
      newState.tasks = action.payload;
      break;
    case UNCOMPLETE_TASK:
      newState.tasks = action.payload;
      break;
    case CREATE_TASK:
      newState.tasks = [...newState.tasks, action.payload];
      break;
    default:
      return newState;
  }
  return newState;
}
export default taskReducer;
