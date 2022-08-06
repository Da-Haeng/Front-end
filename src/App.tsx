import React, { useEffect, useReducer, useRef, useState } from "react";
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
import DetailPage from "./DetailPage/DetailPage";

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
    description: "셤끝나고 일본 여행",
    color: 2,
  },
  {
    id: 3,
    title: "NEWYORK🛫",
    date: "NOVEMBER 1 ~ NOVEMBER 28",
    description: "뉴욕 걸리버 여행기",
    color: 3,
  },
];

// const contentData = [
//   {
//     categoryTitle: "DAY1", 
//     id: 1, 
//     mainId: 1,
//     document: [
//       {
//         id: 1,
//         text: "협재로 가서 숙소 체크인!",
//         type: "h2",
//         color: "black",
//       }
//     ]
//   }
// ]

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
    case "DETAIL": {
      newState = state.map((it) => it.id === action.targetId);
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const MemoStateContext = React.createContext<[]>([]);
export const MemoDispatchContext = React.createContext<{}>({});

function App() {
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
    <MemoStateContext.Provider value={data}>
      <MemoDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/project_list" element={<ProjectList />}></Route> */}
            <Route path="/" element={<Tutorial />}></Route>
            <Route path="/start" element={<Start />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/main"
              element={<MainPage memoData={memoData} />}
            ></Route>
            <Route path="/detail/:id" element={<DetailPage />}></Route>
            {/* <Route path="/todo" element={<TodoTemplete todoData={todoData} />}></Route> */}
          </Routes>
        </BrowserRouter>
      </MemoDispatchContext.Provider>
    </MemoStateContext.Provider>
  );
}

export default React.memo(App);
