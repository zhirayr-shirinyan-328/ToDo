import store from "./stateManagement/store";

function tempWraper() {
  /*
    const header = document.querySelectorAll('.header');
    const title = document.querySelectorAll('.header-title');
    const menu = document.querySelectorAll('.menu-icon-container');
    const dummyTask = document.querySelectorAll('.todo-item');
    const checkbox = document.querySelector('.task-checkbox');
    const indicator = document.querySelectorAll('.task-category-indicator');
    const oval = document.querySelectorAll('.oval');
    const body = document.querySelector('body');
    */
  const main = document.querySelector(".main");

  const createTask = task => {
    const taskContainer = document.createElement("div");
    const taskCheckbox = document.createElement("div");
    const taskTitle = document.createElement("p");
    const taskCategory = document.createElement("div");
    main.append(taskContainer);
    taskContainer.append(taskCheckbox);
    taskContainer.append(taskTitle);
    taskContainer.append(taskCategory);
    taskContainer.setAttribute("class", "todo-item");
    taskCheckbox.setAttribute("class", "task-checkbox");
    taskTitle.innerHTML = task.name;
    taskCategory.setAttribute("class", "task-category-indicator");
  };

  // Generating and appending tasks.
  store.getState().forEach(task => createTask(task));

  // Selecting tasks.
  const checkboxes = document.querySelectorAll(".task-checkbox"); // All task elements.
  function clickHandler(e) {
    const currentCheckbox = e.currentTarget;
    currentCheckbox.setAttribute("class", "task-checkbox checked");
  }
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", clickHandler);
  });
}

export default tempWraper;
