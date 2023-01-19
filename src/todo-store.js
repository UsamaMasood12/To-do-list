import createStore, {
  TOGGLE,
  LOAD_TODOS,
  SWAP_TODOS,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED,
} from './store.js';

class TodoStore {
  constructor() {
    this.store = createStore();
  }

  get todos() {
    return this.store.getState();
  }

  toggleTodo(index) {
    this.store.dispatch({
      type: TOGGLE,
      index,
    });
  }

  loadTodos(items) {
    this.store.dispatch({
      type: LOAD_TODOS,
      items,
    });
  }

  swapTodos(source, dest) {
    this.store.dispatch({
      type: SWAP_TODOS,
      source,
      dest,
    });
  }

  addTodo(text) {
    this.store.dispatch({
      type: ADD_TODO,
      text,
    });
  }

  editTodo(index, text) {
    this.store.dispatch({
      type: EDIT_TODO,
      index,
      text,
    });
  }

  deleteTodo(index) {
    this.store.dispatch({
      type: DELETE_TODO,
      index,
    });
  }

  clearCompleted() {
    this.store.dispatch({
      type: CLEAR_COMPLETED,
    });
  }

  onUpdate(callback) {
    this.store.subscribe(callback);
  }
}

export const Store = TodoStore;

const store = new TodoStore();
export default store;