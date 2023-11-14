import './CommentsSection.scss';
import Comments from "../Comments/Comments";
import pfp from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/add_comment.svg';

function CommentsSection(props) {

    return (
        <div className="comments-section">
            <h5>{props.comments.length} Comments</h5>

            <form id="comment-form" className="comments-section__form">
              
                <div className="comments-section__container">
                    <img className="comments-section__pfp" src={pfp} alt="profile picture"/>
                        
                    <div className="comments-section__user-input">
                        
                        {/* <!--Comment Field--> */}
                        <label htmlFor="comment" className="comments-section__field-label">JOIN THE CONVERSATION</label>
                        <div className="comments-section__field">
                            <textarea className="comments-section__comment-textarea" name="comment" id="comment" placeholder="Add a new comment" required></textarea>
                        </div>
                        
                        {/* <!--Comment Button--> */}

                        <div className="comments-section__button-container">
                            <button id="comment-button" className="comments-section__button" type="submit">
                                COMMENT
                            </button>
                            <img className="comments-section__comment-icon" src={commentIcon} alt="comment icon"/>
                        </div>

                    </div>
                </div>
            </form>

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