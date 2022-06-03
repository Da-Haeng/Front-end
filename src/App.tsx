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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/project_list" element={<ProjectList />}></Route> */}
          <Route path="/" element={<Tutorial />}></Route>
          <Route path="/start" element={<Start />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
