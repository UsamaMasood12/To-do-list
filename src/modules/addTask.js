/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
import saveStorage from './saveStorage.js';
import renderTasks from '../index.js';

const addTask = (todoInput) => {
  let list = JSON.parse(localStorage.getItem('todo-list'));

  if (todoInput.value === '') {
    todoInput.focus();
  } else if (list != null) {
    list.push({
      description: todoInput.value,
      completed: false,
      index: list.length + 1,
    });
    saveStorage(list);
  } else {
    list = [];
    list.push({
      description: todoInput.value,
      completed: false,
      index: 1,
    });
    saveStorage(list);
  }

  todoInput.value = '';
  todoInput.focus();

  renderTasks();
};

export default addTask;