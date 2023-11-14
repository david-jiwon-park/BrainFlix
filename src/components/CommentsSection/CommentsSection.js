import './CommentsSection.scss';
import CommentsForm from "../CommentsForm/CommentsForm"
import Comments from "../Comments/Comments";

function CommentsSection(props) {

    return (
        <div className="comments-section">
            <h5>{props.comments.length} Comments</h5>

            <CommentsForm />
            
            <section>
                {props.comments.map((comment) => (
                    <Comments 
                        key={comment.id}
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}
                    />
                ))}
            </section>
        </div>

    );
}

export default CommentsSection;