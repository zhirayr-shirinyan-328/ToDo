import "../styles/index.scss";
import taskGenerator from "./taskGenerator";
import { createTask } from "./actions/taskActions";
import store from "./stateManagement/store";

window.createTaskAction = createTask;
window.store = store;
// taskGenerator();
