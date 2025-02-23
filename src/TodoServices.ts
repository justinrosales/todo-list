import TodoTypes from "./TodoTypes";

const LOCAL_STORAGE_KEY = "todos";

// CRUD COMMANDS (CREATE/READ/UPDATE/DELETE)
// stores data in local storage

const TodoService = {
  // READ
  getTodos: (): TodoTypes[] => {
    const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todoStr ? JSON.parse(todoStr) : [];
  },

  // CREATE
  addTodos: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    const updateTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return newTodo; //used to be newtodo
  },

  // UPDATE
  updateTodo: (todo: TodoTypes): TodoTypes[] => {
    const todos = TodoService.getTodos();
    const updateTodos = todos.map((t) => (t.id == todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return updateTodos; //used to be todo
  },

  // DELETE
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();
    const updateTodos = todos.filter((todos) => todos.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
  },
};

export default TodoService;
