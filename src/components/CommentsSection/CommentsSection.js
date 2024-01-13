// Component for entire Comments Section

import './CommentsSection.scss';
import CommentsForm from "../CommentsForm/CommentsForm"
import Comments from "../Comments/Comments";

function CommentsSection({comments}) {
    return (
        <section className="comments-section">
            <h5>{comments?.length} {comments?.length === 1 ? "Comment" : "Comments"}</h5>
            
            <CommentsForm/>
            
            <div className="comments-section__comments">
                
                {/* Mapping comments from selected video into Comments component */}
                {comments?.map((comment) => (
                    <Comments 
                        key={comment.id}
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}
                    /> 
                ))}
                
            </div>
        </section>
    );
}

export default CommentsSection;