import './CommentsSection.scss';
import CommentsForm from "../CommentsForm/CommentsForm"
import Comments from "../Comments/Comments";

function CommentsSection({comments, formatDate}) {

    return (
        <div className="comments-section">
            <h5>{comments.length} {`${comments.length === 1 ? `Comment` : `Comments`}`}</h5>

            <CommentsForm />
            
            <div className="comments-section__comments">
                {comments.map((comment) => (
                    <Comments 
                        key={comment.id}
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}
                        formatDate={formatDate}
                    />
                ))}
            </div>
        </div>

    );
}

export default CommentsSection;