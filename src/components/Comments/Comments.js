import './Comments.scss';

function Comments(props) {
    
    const formattedDate = props.formatDate(props);

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
        
    )
}

export default Comments;