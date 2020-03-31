import { COMPLETE_TASK, UNCOMPLETE_TASK, CREATE_TASK } from "./constants";

export const completeTask = (id, name) => ({
  type: COMPLETE_TASK,
  payload: { id, name }
});

export const uncompleteTask = (id, name) => ({
  type: UNCOMPLETE_TASK,
  payload: { id, name }
});

export const createTask = (id, name, date) => ({
  type: CREATE_TASK,
  payload: { id, name, date }
});
