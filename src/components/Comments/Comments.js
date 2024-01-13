// Component for each comment from the selected video that is mapped

import './Comments.scss';
import formatDate from "../../utilities/utilities";

function Comments(props) {
    
    // Using the formatDate function passed as a prop to convert the comment timestamp to mm/dd/yyyy
    const formattedDate = formatDate(props);

    return (
        <article className="comments">
            <div className="comments__pfp"></div>
            <div className="comments__content">
                <div className="comments__top-row">
                    <h4 className="comments__name">{props.name}</h4>
                    <h4 className="comments__date">{formattedDate}</h4>
                </div>
                <p className="comments__comment">{props.comment}</p>
            </div>
        </article>
    );
}

export default Comments;