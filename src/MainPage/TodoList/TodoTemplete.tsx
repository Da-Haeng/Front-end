import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import TodoList from "./TodoList";
import "./Todo.css";
import TodoHeader from "./TodoHeader";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export type todos = {
  id: number;
  todo: string;
  done: boolean;
};
const reducer = (state, action: any) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [...state, action.data];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it: { id: any; }) => it.id !== action.targetId);
      break;
    }
    case "DONE": {
      newState = state.map(it => {
        if (it.id === action.targetId  && it.done === false) {
          it.done = true;
        }
        return it;
      });
      break;
    }
    case "NOTDONE": {
      newState = state.map(it => {
        if (it.id === action.targetId  && it.done === true) {
          it.done = false;
        }
        return it;
      });
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const TodoStateContext = React.createContext<[]>([]);
export const TodoDispatchContext = React.createContext<{}>({});
const TodoTemplete = ({ todoData }) => {
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
  }, []);

  const dataId = useRef(5);

  const onCreate = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        todo: todo,
        done: false,
      },
    });
    setTodo("");
    onToggle();
    dataId.current += 1;
  };

  const onRemove = (targetId: number) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const onDone = (targetId: number) => {
    dispatch({ type: "DONE", targetId });
  };
  const onNotDone = (targetId: number) => {
    dispatch({ type: "NOTDONE", targetId });
  };

  return (
    <TodoStateContext.Provider value={data}>
      <TodoDispatchContext.Provider value={{ onRemove, onDone, onNotDone }}>
        <div className="TodoTemplete">
          <TodoHeader />
          <TodoList />
          <div className="todo_create_form">
            {open && (
              <form onSubmit={onCreate}>
                <input
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  placeholder="할 일을 입력 후, Enter를 누르세요"
                />
              </form>
            )}
          </div>
          <div className="todo_create_btn" onClick={onToggle}>
            {open && <FontAwesomeIcon icon={faAngleDown} className="openAdd"/>}
            {!open && <FontAwesomeIcon icon={faAngleUp} className="closeAdd"/>}
          </div>
        </div>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
export default TodoTemplete;
