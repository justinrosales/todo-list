import TodoTypes from "../TodoTypes";
import TodoService from "../TodoServices";
import TodoForm from "./TodoForm";
import "../css/TodoList.css";

import { useState } from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ComponentName = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
  const [editingTodoID, setEditedTodoID] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>("");

  // handling edit actions
  const handleEditStart = (id: number, text: string) => {
    setEditedTodoID(id);
    setEditedTodoText(text);
  };

  const handleEditCancel = () => {
    setEditedTodoID(null);
    setEditedTodoText("");
  };

  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      const updateTodo = TodoService.updateTodo({
        id,
        text: editedTodoText,
        completed: false,
      });

      setTodos(updateTodo);
      setEditedTodoID(null);
      setEditedTodoText("");
    }
  };

  // function to delete todos
  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoContainer">
      <div>
        <TodoForm setTodos={setTodos} />
      </div>
      {todos.map((todo) => (
        <div className="items" key={todo.id}>
          {editingTodoID == todo.id ? (
            <div className="editedText">
              <input
                type="text"
                value={editedTodoText}
                onChange={(e) => setEditedTodoText(e.target.value)}
                autoFocus={true}
              />
              <button onClick={() => handleEditSave(todo.id)}>
                <FaCheck />
              </button>

              <button className="cancelbtn" onClick={() => handleEditCancel()}>
                <GiCancel />
              </button>
            </div>
          ) : (
            <div className="editBtn">
              <span>{todo.text}</span>
              <button onClick={() => handleEditStart(todo.id, todo.text)}>
                <FaEdit />
              </button>
            </div>
          )}

          <button onClick={() => handleDeleteTodo(todo.id)}>
            <RiDeleteBin5Fill />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ComponentName;
