import { FaPen, FaClipboardList } from "react-icons/fa";
import TodoList from "./components/TodoList.tsx";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <FaPen />
          <h1> What to do</h1>
          <FaClipboardList />
        </div>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
