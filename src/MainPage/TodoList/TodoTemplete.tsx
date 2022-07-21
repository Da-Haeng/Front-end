import React, { useRef } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import TodoList from "./TodoList";
import "./Todo.css";
import TodoHeader from "./TodoHeader";
import { useState } from "react";

export type todos = {
  id: number;
  todo: string;
  done: boolean;
};
const reducer = (state: any, action: any) => {
  let newState: any = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    default:
        return state;
  }
  return newState;
};

export const TodoStateContext = React.createContext<[]>([]);
const TodoTemplete = (todoData) => {
  const [open, setOpen] = useState(true);
  const [todo, setTodo] = useState("");
  const [done, setDone] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  };

  const [data, dispatch] = useReducer(reducer, todoData);
  useEffect(() => {
    if (data) {
      dispatch({ type: "INIT", data: todoData });
    }
  }, [todoData]);

  const dataId = useRef(5);

  const onSubmit = () => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        todo: todo,
        done: false,
      },
    });
    dataId.current += 1;
  };

  return (
    <TodoStateContext.Provider value={data}>
      <div className="TodoTemplete">
        <TodoHeader />
        <TodoList />
        <div className="todo_create_form">
          {open && (
            <form onSubmit={onSubmit}>
              <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="할 일을 입력 후, Enter를 누르세요"/>
            </form>
          )}
        </div>
        <div className="todo_create_btn" onClick={onToggle}>
            +
        </div>
      </div>
    </TodoStateContext.Provider>
  );
};
export default TodoTemplete;
