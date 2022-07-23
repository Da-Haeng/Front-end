import React, { useEffect, useReducer, useRef, useState } from "react";
import { memo } from "../App";
import SideBar from "../CommonPage/SideBar/SideBar";
import "./Main.css";
import MemoList from "./MemoList";
import TodoTemplete from "./TodoList/TodoTemplete";
import { todoData } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import DetailPage from "../DetailPage/DetailPage";

const reducer = (state: any, action: any) => {
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
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) => {
        return it.id === action.data.id ? { ...action.data } : it;
      });
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const MemoStateContext = React.createContext<[]>([]);
export const MemoDispatchContext = React.createContext<{}>({});

const MainPage = ({ memoData }) => {
  const [addTodo, setAddTodo] = useState(false);
  const [data, dispatch] = useReducer(reducer, memoData);
  const dataId = useRef(4);

  useEffect(() => {
    if (data) {
      dispatch({ type: "INIT", data: data });
    }
  }, [data]);

  const onCreate = () => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        title: "메모장 이름",
        date: "지정 날짜",
        description: "메모장 소개",
        color: 0,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const onEdit = (targetId, title, date, description, color) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        title,
        date,
        description,
        color,
      },
    });
  };

  return (
    <div className="main">
      <SideBar />
      <MemoStateContext.Provider value={data}>
        <MemoDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
          <div className="main-container">
            <h1 className="main-title">DA : HAENG</h1>
            <MemoList />
          </div>
          <div className="RightSide">
            <div className="openTodo">
              <FontAwesomeIcon
                icon={faClipboardList}
                onClick={() => setAddTodo(!addTodo)}
              />
            </div>
            {addTodo && <TodoTemplete todoData={todoData} />}
            <div className="openTodo">
              <FontAwesomeIcon icon={faCalendarDays} onClick={() => {}} />
            </div>
          </div>
        </MemoDispatchContext.Provider>
      </MemoStateContext.Provider>
    </div>
  );
};
export default MainPage;
