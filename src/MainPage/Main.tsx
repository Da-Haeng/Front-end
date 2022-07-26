import React, { useEffect, useReducer, useRef, useState } from "react";
import SideBar from "../CommonPage/SideBar/SideBar";
import "./Main.css";
import MemoList from "./MemoList";
import TodoTemplete from "./TodoList/TodoTemplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const MainPage = ({ memoData }) => {
  const [addTodo, setAddTodo] = useState(false);

  // const goDetail = (targetId) => {
  //   dispatch({type:"DETAIL", targetId});
  // }

  return (
    <div className="main">
      <SideBar />
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
        {addTodo && <TodoTemplete />}
        <div className="openTodo">
          <FontAwesomeIcon icon={faCalendarDays} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
export default React.memo(MainPage);
