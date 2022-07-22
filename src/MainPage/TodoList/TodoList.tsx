import { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { TodoDispatchContext, TodoStateContext } from "./TodoTemplete";
import "./Todo.css";
const TodoList = () => {
  const todoData = useContext(TodoStateContext);
  return (
    <div className="TodoList">
        {todoData && todoData.map((it: any) => <div key={it.id}><TodoItem {...it}/></div>)}
    </div>
  );
};
export default TodoList;
 