import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { MemoDispatchContext } from "./Main";
import "./Main.css";
const MemoItem = ({ id, title, date, description, color }: any) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newColor, setNewColor] = useState(color);
  const [newDate, setNewDate] = useState(date);
  const [isEdit, setEdit] = useState(false);

  const { onRemove, onEdit }: any = useContext(MemoDispatchContext);
  const handleRemove = () => {
    onRemove(id);
  };
  const handleEdit = () => {
    onEdit(id, newTitle, newDate, newDescription, newColor);
  };
  const handleToggleEdit = () => {
    isEdit === true ? setEdit(false) : setEdit(true)
    console.log(isEdit);
  };

  return (
    <div className="main-memo">
      <div className="main-memotitle">
        <div className="main-memotitle-left">
          {/* <span>{newTitle}</span> */}
          {onEdit === true ? (
            <input
              type="text"
              className="main-memotitle_input"
              value={newTitle}
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
          ) : (
            <span>{newTitle}</span>
          )}
          <FontAwesomeIcon
            icon={faPencil}
            className="pencil-icon"
            onClick={handleToggleEdit}
          />
        </div>
      </div>
      {/* <div className="main-memotitle-right"></div> */}
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
      <div className="main-memobottom">
        <FontAwesomeIcon
          icon={faTrash}
          className="trash-icon"
          onClick={handleRemove}
        />
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
