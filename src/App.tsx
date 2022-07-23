import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Tutorial from "./StartPage/Tutorial";
import Start from "./StartPage/Start";
import Login from "./StartPage/Login";
import MainPage from "./MainPage/Main";
import TodoTemplete, { todos } from "./MainPage/TodoList/TodoTemplete";

export type memo = {
  id: number;
  title: string;
  date: string;
  description: string;
  color: number;
};

const memoData = [
  {
    id: 1,
    title: "GO JEJU🌴",
    date: "JULY 12 ~ JULY 15",
    description: "제주 맛집 뿌시기 여행 :)",
    color: 1,
  },
  {
    id: 2,
    title: "JAPAN🍜",
    date: "MAY 25 ~ MAY 28",
    info: "셤끝나고 일본 여행",
    color: 2,
  },
  {
    id: 3,
    title: "NEWYORK🛫",
    date: "NOVEMBER 1 ~ NOVEMBER 28",
    info: "뉴욕 걸리버 여행기",
    color: 3,
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/project_list" element={<ProjectList />}></Route> */}
          <Route path="/" element={<Tutorial />}></Route>
          <Route path="/start" element={<Start />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/main" element={<MainPage memoData={memoData}/>}></Route>
          {/* <Route path="/todo" element={<TodoTemplete todoData={todoData} />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
