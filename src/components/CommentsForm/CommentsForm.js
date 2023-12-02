// Component for Comments Form where comments are to be submitted

import './CommentsForm.scss';
import pfp from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/add_comment.svg';

function CommentsForm() {

    return (
        <form id="comment-form" className="comments-form">
            <img className="comments-form__pfp" src={pfp} alt="profile picture"/>
                
            <div className="comments-form__user-input">
                
                {/* <!--Comment Field--> */}                   
                <div className="comments-form__field-container">
                    <label htmlFor="comment" className="comments-form__field-label">JOIN THE CONVERSATION</label>
                    <div className="comments-form__field">
                        <textarea className="comments-form__comment-textarea" name="comment" id="comment" placeholder="Add a new comment" required></textarea>
                    </div>
                </div>
                
                {/* <!--Comment Button--> */}
                <div className="comments-form__button-container">
                    <button id="comment-button" className="comments-form__button" type="submit">
                        COMMENT
                    </button>
                    <img className="comments-form__comment-icon" src={commentIcon} alt="comment icon"/>
                </div>
            </div>
        </form>
    );
}

export default CommentsForm;