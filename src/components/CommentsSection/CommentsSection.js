// Component for entire Comments Section

import './CommentsSection.scss';
import CommentsForm from "../CommentsForm/CommentsForm"
import Comments from "../Comments/Comments";

function CommentsSection({comments, formatDate}) {

    return (
        <section className="comments-section">
            <h5>Comments</h5>
            
            <CommentsForm/>
            
            <div className="comments-section__comments">
                
                {/* Mapping comments from selected video into Comments component */}
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
        </section>
    );
}

export default CommentsSection;