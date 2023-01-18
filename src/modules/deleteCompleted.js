/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import renderTasks from '../index.js';
import saveStorage from './saveStorage.js';

const deleteCompleted = () => {
  const storedItems = JSON.parse(localStorage.getItem('todo-list'));

  const uncompletedItems = storedItems.filter((item) => item.completed === false);

  let index = 1;
  for (let i = 0; i <= uncompletedItems.length - 1; i++) {
    uncompletedItems[i].index = index++;
  }
  saveStorage(uncompletedItems);
  renderTasks();
};

export default deleteCompleted;