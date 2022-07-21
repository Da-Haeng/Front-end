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

const todoData = [
  {
      id: 1,
      todo: '메모장 만들기',
      done: false
  },
  {
      id: 2,
      todo: '리액트 공부하기',
      done: false
  },
  {
      id: 3,
      todo: '커밋하기',
      done: false
  },
  {
    id: 4,
    todo: '공부',
    done: false
}
]

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/project_list" element={<ProjectList />}></Route> */}
          <Route path="/" element={<Tutorial />}></Route>
          <Route path="/start" element={<Start />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/todo" element={<TodoTemplete todoData={todoData} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
