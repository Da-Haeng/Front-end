import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Tutorial from "./StartPage/Tutorial";

function App() {
  return (
    <Tutorial />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/project_list" element={<ProjectList />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
