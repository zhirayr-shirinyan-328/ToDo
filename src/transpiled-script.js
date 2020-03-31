import data from "./data.js";
const header = document.querySelectorAll('.header');
const title = document.querySelectorAll('.header-title');
const menu = document.querySelectorAll('.menu-icon-container');
const dummyTask = document.querySelectorAll('.todo-item');
const checkbox = document.querySelector('.task-checkbox');
const indicator = document.querySelectorAll('.task-category-indicator');
const oval = document.querySelectorAll('.oval');
const body = document.querySelector('body');
const main = document.querySelector('.main');

const createTask = task => {
  const taskContainer = document.createElement('div');
  const taskCheckbox = document.createElement('div');
  const taskTitle = document.createElement('p');
  const taskCategory = document.createElement('div');
  main.append(taskContainer);
  taskContainer.append(taskCheckbox);
  taskContainer.append(taskTitle);
  taskContainer.append(taskCategory);
  taskContainer.setAttribute('class', 'todo-item');
  taskCheckbox.setAttribute('class', 'task-checkbox');
  taskTitle.innerHTML = task.name;
  taskCategory.setAttribute('class', 'task-category-indicator');
}; // Generating and appending tasks.


data.forEach(task => createTask(task)); // Selecting tasks.

const checkboxes = document.querySelectorAll('.task-checkbox'); // All task elements.

checkboxes.forEach(checkbox) => checkbox.addEventListener('click', clickHandler));

function clickHandler(e) {
  const currentCheckbox = e.currentTarget;
  currentCheckbox.setAttribute('class', 'task-checkbox checked');
}
/*


function makeChecked(){ // Event handler
    taskCheckbox.setAttribute('class', 'task-checkbox checked');
}

taskCheckbox.addEventListener('click', makeChecked);
*/
