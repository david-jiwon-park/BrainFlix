import './Comments.scss';
import pfp from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/add_comment.svg';

function Comments(props) {

    return (
        <div className="comments">
            <h5>{props.comments.length} Comments</h5>

            <form id="comment-form" className="comments__form">
              
                <div className="comments__container">
                    <img className="comments__pfp" src={pfp} alt="profile picture"/>
                        
                    <div className="comments__user-input">
                        
                        {/* <!--Comment Field--> */}
                        <label htmlFor="comment" className="comments__field-label">JOIN THE CONVERSATION</label>
                        <div className="comments__field">
                            <textarea className="comments__comment-textarea" name="comment" id="comment" placeholder="Add a new comment" required></textarea>
                        </div>
                        
                        {/* <!--Comment Button--> */}

                        <div className="comments__button-container">
                            <button id="comment-button" className="comments__button" type="submit">
                                COMMENT
                            </button>
                            <img className="comments__comment-icon" src={commentIcon} alt="comment icon"/>
                        </div>

                    </div>
                </div>
            </form>


        </div>

    );
}


export default Comments;