/* eslint-disable linebreak-style */

const check = (checkbox, item, description) => {
  if (checkbox.checked) {
    description.classList.add('strike');
    item.completed = true;
  } else {
    description.classList.remove('strike');
    item.completed = false;
  }
};

export default check;