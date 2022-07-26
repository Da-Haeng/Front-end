import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const DetailHeader = ({title}) => {
    return (
        <div className="DatailHeader">
            <h2>{title}</h2>
            <FontAwesomeIcon icon={faEllipsis} className="memo-setting"/>
        </div>
    )
}
export default DetailHeader