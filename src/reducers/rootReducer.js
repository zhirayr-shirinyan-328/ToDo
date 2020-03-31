import taskReducer from "./taskReducer";
import { combineReducers } from "../stateManagement/createStore";

const rootReducer = combineReducers({
  taskState: taskReducer
});

export default rootReducer;
