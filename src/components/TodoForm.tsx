import TodoService from "../TodoServices";
import TodoTypes from "../TodoTypes";
import "../css/TodoForm.css";

import React, { Dispatch, SetStateAction, useState } from "react";

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo: TodoTypes = TodoService.addTodos(newTodoText);
      setTodos((prevTodo) => [...prevTodo, newTodo]);
      setNewTodoText("");
    }
  };

  return (
    <div className="inputForm">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="add a task"
      />

      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
