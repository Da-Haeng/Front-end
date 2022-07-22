import React, { useEffect, useReducer, useRef, useState } from "react";
import { memo } from "../App";
import SideBar from "../CommonPage/SideBar/SideBar";
import "./Main.css";
import MemoList from "./MemoList";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencil } from "@fortawesome/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";


const reducer = (state: any, action: any) => {
  let newState = []
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [...state, action.data];
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
  const [data, dispatch] = useReducer(reducer, memoData);
  const dataId = useRef(4);

  useEffect(() => {
    if(data) {
      dispatch({type: "INIT", data: memoData});
    }
  });
  const onCreate = () => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        title: "메모장 이름",
        date: "지정 날짜",
        description: "메모장 소개",
        color: 1,
      },
    });
    dataId.current += 1;
  };

  return (
    <div className="main">
      <SideBar />
      <MemoStateContext.Provider value={data}>
        <MemoDispatchContext.Provider value={{onCreate}}>
        <div className="main-container">
          <h1 className="main-title">DA : HAENG</h1>
          <MemoList />
        </div>
        </MemoDispatchContext.Provider>
      </MemoStateContext.Provider>
    </div>
  );
};
export default MainPage;
