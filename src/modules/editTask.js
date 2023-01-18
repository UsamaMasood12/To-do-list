/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
import renderTasks from '../index.js';
import saveStorage from './saveStorage.js';

const editTask = (description, items, item) => {
  const itemIndex = item.index;
  const itemToEdit = items[itemIndex - 1];
  itemToEdit.description = description.textContent;
  saveStorage(items);
  renderTasks();
};

export default editTask;