import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "./TodoTemplete";
import "./Todo.css";
const TodoList = () => {
  const todoData = useContext(TodoStateContext);
  const data = todoData['todoData'];
  return (
    <div className="TodoList">
        {data && data.map((it) => <div key={it.id}><TodoItem {...it} /></div>)}
    </div>
  );
};
export default TodoList;
