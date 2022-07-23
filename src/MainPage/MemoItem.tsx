import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { MemoDispatchContext } from "./Main";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const MemoItem = ({ id, title, date, description, color }: any) => {
  const navigate = useNavigate();

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newColor, setNewColor] = useState(color);
  const [newDate, setNewDate] = useState(date);
  const [isEdit, setEdit] = useState(false);
  const [isColor, setColor] = useState(false);

  const { onRemove, onEdit }: any = useContext(MemoDispatchContext);

  const handleRemove = () => {
    onRemove(id);
  };

  const handleEdit = () => {
    isEdit === true ? setEdit(false) : setEdit(true);
    onEdit(id, newTitle, newDate, newDescription, newColor);
  };

  const handleToggleEdit = () => {
    isEdit === true ? setEdit(false) : setEdit(true);
  };

  const handleColor = (color) => {
    setNewColor(color);
    onEdit(id, newTitle, newDate, newDescription, newColor);
  };

  const handleToggleColor = () => {
    isColor === true ? setColor(false) : setColor(true);
    console.log(isColor);
  };

  const goDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="main-memo" onClick={goDetail}>
      <div className="main-memotitle">
        {/* <span>{newTitle}</span> */}
        {isEdit === true ? (
          <div className="main-memotitle-left">
            <input
              type="text"
              className="main-memotitle_input"
              value={newTitle}
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
            <FontAwesomeIcon
              icon={faPencil}
              className={["pencil-icon", `pencil-icon-${isEdit}`].join(" ")}
              onClick={handleEdit}
            />
          </div>
        ) : (
          <div className="main-memotitle-left">
            <input
              type="text"
              className="main-memotitle_input"
              value={newTitle}
              readOnly
            />
            <FontAwesomeIcon
              icon={faPencil}
              className={["pencil-icon", `pencil-icon-${isEdit}`].join(" ")}
              onClick={handleToggleEdit}
            />
          </div>
        )}
        <div
          className={[
            "main-memotitle-right",
            `main-memotitle-right-${newColor}`,
          ].join(" ")}
          onClick={handleToggleColor}
        >
          {isColor === true ? (
            <div className="main-memotitle-colorwidget">
              <div
                className="main-memotitle-color-1"
                onClick={() => handleColor(1)}
              ></div>
              <div
                className="main-memotitle-color-2"
                onClick={() => handleColor(2)}
              ></div>
              <div
                className="main-memotitle-color-3"
                onClick={() => handleColor(3)}
              ></div>
              <div
                className="main-memotitle-color-4"
                onClick={() => handleColor(4)}
              ></div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {isEdit === true ? (
        <div className="main-memocontext">
          <input
            type="text"
            className="main-memodate"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <input
            type="text"
            className="main-memointro"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
      ) : (
        <div className="main-memocontext">
          <input
            type="text"
            className="main-memodate"
            value={newDate}
            readOnly
          />
          <input
            type="text"
            className="main-memointro"
            value={newDescription}
            readOnly
          />
        </div>
      )}

      <div className="main-memobottom">
        <div>
          <FontAwesomeIcon
            icon={faTrash}
            className="trash-icon"
            onClick={handleRemove}
          />
        </div>

        <div className="main-memomember">
          {/* <span>융</span>
                <span>다</span>
                <span>슬</span>
                <span>지</span> */}
        </div>
      </div>
    </div>
  );
};
export default MemoItem;
