import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Tutorial from "./StartPage/Tutorial";
import SideBar from "./CommonPage/SideBar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      {/* <Tutorial /> */}
    </BrowserRouter>
  );
}

export default App;
