/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import './assets/stylesheet/style.css';

const container = document.querySelector('.container');

const tasksList = [
  {
    description: 'Do this',
    completed: true,
    index: 0,
  },
  {
    description: 'Do that',
    completed: false,
    index: 1,
  },
];

const renderTasks = (tasks) => {
  for (let i = 0; i <= tasks.length - 1; i++) {
    const taskContainer = document.createElement('div');
    taskContainer.id = tasks[i].index;
    taskContainer.classList.add('list');

    const taskCheckox = document.createElement('input');
    taskCheckox.type = 'checkbox';
    taskCheckox.classList.add('check');

    const taskDescription = document.createElement('label');
    taskDescription.classList.add('label');
    taskDescription.textContent = `${tasks[i].description}`;
    taskDescription.contentEditable = true;

    const dots = document.createElement('span');
    dots.innerHTML = "<i class='fas fa-ellipsis-v'></i>";

    const trash = document.createElement('span');
    trash.innerHTML = "<i class='fas fa-trash-alt'></i>";
    trash.style.display = 'none';

    taskContainer.appendChild(taskCheckox);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(dots);
    taskContainer.appendChild(trash);
    container.appendChild(taskContainer);

    taskDescription.addEventListener('focus', () => {
      dots.style.display = 'none';
      trash.style.display = 'flex';
    });

    taskDescription.addEventListener('blur', () => {
      dots.style.display = 'flex';
      trash.style.display = 'none';
    });
  }
};

renderTasks(tasksList);