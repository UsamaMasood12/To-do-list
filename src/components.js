import store from './todo-store.js';

function iconButton(name) {
  const node = document.createElement('button');
  node.classList.add('icon-button');

  const icon = document.createElement('span');
  icon.innerText = name;
  icon.classList.add('material-icons', 'icon');

  node.appendChild(icon);
  return node;
}

export function listItemComponent({
  index, description, completed, onToggle, onSwap, onEdit, onDelete,
}) {
  const node = document.createElement('li');
  node.classList.add('todo');

  // Drag and Drop listeners
  node.addEventListener('dragstart', (event) => {
    node.classList.add('dragging');
    setTimeout(() => {
      node.classList.add('opacity-0');
    }, 0);
    event.dataTransfer.setData('index', index);
  });

  node.addEventListener('dragover', (event) => {
    event.preventDefault();
    node.classList.add('opacity-2');
  });

  node.addEventListener('dragleave', () => {
    node.classList.remove('opacity-2');
  });

  node.addEventListener('dragend', () => {
    node.setAttribute('draggable', false);
    node.classList.remove('opacity-0', 'dragging');
  });

  node.addEventListener('drop', (event) => {
    const source = event.dataTransfer.getData('index');
    const destination = index;
    onSwap(source, destination);
  });

  // Todo toggle checkbox
  const checkbox = iconButton(completed ? 'done' : 'check_box_outline_blank');
  checkbox.classList.add('toggle');
  if (completed) {
    node.classList.add('todo-completed');
    checkbox.classList.add('todo-completed');
  }
  checkbox.addEventListener('click', () => {
    onToggle(index);
  });

  // Todo description input
  const text = document.createElement('input');
  text.value = description;
  text.classList.add('edit');
  text.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEdit(index, event.target.value);
    }
  });

  // Drag handle
  const dragButton = iconButton('more_vert');
  dragButton.classList.add('drag-button', 'opacity-2');
  dragButton.addEventListener('mousedown', () => {
    node.setAttribute('draggable', true);
  });

  // Delete Todo item
  const deleteButton = iconButton('delete_outline');
  deleteButton.classList.add('opacity-5', 'hide', 'delete-btn');
  deleteButton.addEventListener('mousedown', () => {
    onDelete(index);
  });

  node.appendChild(checkbox);
  node.appendChild(text);
  node.appendChild(deleteButton);
  node.appendChild(dragButton);

  const toggleButtons = () => {
    dragButton.classList.toggle('hide');
    deleteButton.classList.toggle('hide');
  };

  text.addEventListener('focus', toggleButtons);
  text.addEventListener('blur', (event) => {
    toggleButtons();
    onEdit(index, event.target.value);
  });

  return node;
}

export default function addItemsToDOM(items = []) {
  const list = document.getElementById('items');
  list.innerHTML = '';
  items.forEach((item) => {
    list.appendChild(listItemComponent({
      ...item,
      onToggle: (index) => store.toggleTodo(index),
      onSwap: (source, dest) => store.swapTodos(source, dest),
      onEdit: (index, text) => store.editTodo(index, text),
      onDelete: (index) => store.deleteTodo(index),
    }));
  });
}