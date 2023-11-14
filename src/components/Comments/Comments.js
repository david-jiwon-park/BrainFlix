import './Comments.scss';

function Comments(props) {
    
    // Function to format dates into mm/dd/yyyy format
    function formatDate(input) {
        const timestamp = new Date(input.timestamp); 
        const yyyy = timestamp.getFullYear();
        let mm = timestamp.getMonth() + 1; 
        let dd = timestamp.getDate();
        
        if (mm < 10) {
            mm = '0' + mm
        };
        
        if (dd < 10) {
            dd = '0' + dd
        };
        
        return mm + '/' + dd + '/' + yyyy;
    };

    const formattedDate = formatDate(props);

    return (
        
        <article className="comments__container">
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