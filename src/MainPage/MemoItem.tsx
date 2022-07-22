import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
const MemoItem = ({ id, title, date, description, color }: any) => {
    return(
        <div className="main-memo">
            <div className="main-memotitle">
            <div className="main-memotitle-left">
                <span>{title}</span>
                <FontAwesomeIcon icon={faPencil} className="pencil-icon" />
              </div>
            </div>
            {/* <div className="main-memotitle-right"></div> */}
            <div className="main-memocontext">
              <input
                type="text"
                className="main-memodate"
                value={date}
              />
              <input
                type="text"
                className="main-memointro"
                value={description}
              />
            </div>
            <div className="main-memobottom">
              <FontAwesomeIcon icon={faTrash} className="trash-icon" />
              <div className="main-memomember">
                {/* <span>융</span>
                <span>다</span>
                <span>슬</span>
                <span>지</span> */}
              </div>
            </div>
        </div>
    )
}
export default MemoItem;