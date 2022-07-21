import { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "./TodoTemplete";
import "./Todo.css";
const TodoList = () => {
  const todoData = useContext(TodoStateContext);
  useEffect(() => {
    console.log(todoData);
  }, [])
  return (
    <div className="TodoList">
        {todoData && todoData.map((it: any) => <div key={it.id}><TodoItem {...it} /></div>)}
    </div>
  );
};
export default TodoList;
