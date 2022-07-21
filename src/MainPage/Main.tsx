import React, { useState } from "react";
import SideBar from "../CommonPage/SideBar/SideBar";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// interface memo {
//   title: string;
//   date: string;
//   info: string;
// }

// let state: memo[] = [
//   {
//     title: "GO JEJU🌴",
//     date: "JULY 12 ~ JULY 15",
//     info: "제주 맛집 뿌시기 여행 :)",
//   },
//   {
//     title: "JAPAN🍜",
//     date: "MAY 25 ~ MAY 28",
//     info: "셤끝나고 일본 여행",
//   },
//   {
//     title: "NEWYORK🛫",
//     date: "NOVEMBER 1 ~ NOVEMBER 28",
//     info: "뉴욕 걸리버 여행기",
//   },
// ];

const MainPage = () => {
  return (
    <div className="main">
      <SideBar />
      <div className="main-container">
        <h1 className="main-title">DA : HAENG</h1>
        <div className="main-memolist">
          <div className="main-memo">
            <div className="main-memotitle">
              <div className="main-memotitle-left">
                <span>메모장 이름</span>
                <FontAwesomeIcon icon={faPencil} className="pencil-icon" />
              </div>
              <div className="main-memotitle-right"></div>
            </div>
            <div className="main-memocontext">
              <input
                type="text"
                className="main-memodate"
                placeholder="지정 날짜"
              />
              <input
                type="text"
                className="main-memointro"
                placeholder="메모장 소개"
              />
            </div>
            <div className="main-memobottom">
              <FontAwesomeIcon icon={faTrash} className="trash-icon" />
              <div className="main-memomember">
                <span>융</span>
                <span>다</span>
                <span>슬</span>
                <span>지</span>
              </div>
            </div>
          </div>
          <div className="main-memo">
            <div className="main-memotitle">
              <div className="main-memotitle-left">
                <span>GO JEJU🌴</span>
                <FontAwesomeIcon icon={faPencil} className="pencil-icon" />
              </div>
              <div className="main-memotitle-right mem2-1"></div>
            </div>
            <div className="main-memocontext">
              <input
                type="text"
                className="main-memodate"
                placeholder="지정 날짜"
                value="JULY 12 ~ JULY 15"
              />
              <input
                type="text"
                className="main-memointro"
                placeholder="메모장 소개"
                value="제주 맛집 뿌시기 여행 :)"
              />
            </div>
            <div className="main-memobottom">
              <FontAwesomeIcon icon={faTrash} className="trash-icon" />
              <div className="main-memomember mem2-2">
                <span>융</span>
                <span>다</span>
                <span>슬</span>
                <span>지</span>
              </div>
            </div>
          </div>
          <div className="main-memo">
            <div className="main-memotitle">
              <div className="main-memotitle-left">
                <span>JAPAN🍜</span>
                <FontAwesomeIcon icon={faPencil} className="pencil-icon" />
              </div>
              <div className="main-memotitle-right mem3-1"></div>
            </div>
            <div className="main-memocontext">
              <input
                type="text"
                className="main-memodate"
                placeholder="지정 날짜"
                value="MAY 25 ~ MAY 28"
              />
              <input
                type="text"
                className="main-memointro"
                placeholder="메모장 소개"
                value="셤끝나고 일본 여행"
              />
            </div>
            <div className="main-memobottom">
              <FontAwesomeIcon icon={faTrash} className="trash-icon" />
              <div className="main-memomember mem3-2">
                <span>융</span>
                <span>다</span>
                <span>슬</span>
                <span>지</span>
              </div>
            </div>
          </div>
          <div className="main-memo">
            <div className="main-memotitle">
              <div className="main-memotitle-left">
                <span>NEWYORK🛫</span>
                <FontAwesomeIcon icon={faPencil} className="pencil-icon" />
              </div>
              <div className="main-memotitle-right mem4-1"></div>
            </div>
            <div className="main-memocontext">
              <input
                type="text"
                className="main-memodate"
                placeholder="지정 날짜"
                value="NOVEMBER 1 ~ NOVEMBER 28"
              />
              <input
                type="text"
                className="main-memointro"
                placeholder="메모장 소개"
                value="뉴욕 걸리버 여행기"
              />
            </div>
            <div className="main-memobottom">
              <FontAwesomeIcon icon={faTrash} className="trash-icon" />
              <div className="main-memomember mem4-2">
                <span>융</span>
                <span>다</span>
                <span>슬</span>
                <span>지</span>
              </div>
            </div>
          </div>
          <div className="main-memo">
            <span className="memo-plus">+</span>
          </div>
        </div>
      </div>
      <div className="right_col">
        {/* <button className="addTodo"> + </button> */}
      </div>
    </div>
  );
};
export default MainPage;
