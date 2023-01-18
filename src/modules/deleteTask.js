/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import saveStorage from './saveStorage.js';

const deleteTask = (itemIndex) => {
  const storedStuff = JSON.parse(localStorage.getItem('todo-list'));

  const newList = storedStuff.filter((i) => storedStuff.indexOf(i) !== itemIndex);
  for (let i = 0; i <= newList.length - 1; i++) {
    newList[i].index = newList.indexOf(newList[i]) + 1;
  }
  saveStorage(newList);
  window.location.reload();
};

export default deleteTask;