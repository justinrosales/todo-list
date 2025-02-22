import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {
  // READ
  getTodos: (): TodoTypes[] => {
    const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todoStr ? JSON.parse(todoStr) : [];
  },

  //add todos // CREATE
  addTodos: (text: string): TodoTypes[] => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    const updateTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return newtodo; //used to be newtodo
  },

  //update todos // UPDATE
  updateTodo: (todo: TodoTypes): TodoTypes[] => {
    const todos = TodoService.getTodos();
    const updateTodos = todos.map((t) => (t.id == todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return todo; //used to be todo
  },

  //delete todos // DELETE
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();
    const updateTodos = todos.filter((todos) => todos.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
  },
};

export default TodoService;
