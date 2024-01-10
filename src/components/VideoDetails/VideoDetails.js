// Component that contains all relevant details for the selected video

import './VideoDetails.scss';

function VideoDetails(props) {

    // Using the formatDate function passed as a prop to convert the video timestamp to mm/dd/yyyy
    const formattedDate = props.formatDate(props);

    return (
        <section className="video-details">
            <h1 className="video-details__title">{props.title}</h1>
            
            <div className="video-details__data">
                <div className="video-details__data--left">
                    <h4 className="video-details__channel">By {props.channel}</h4>
                    <h5 className="video-details__data-text">{formattedDate}</h5>
                </div>
                <div className="video-details__data--right"> 
                    <div className="video-details__views">
                        <img className="video-details__icon" src="http://localhost:8080/images/views.svg" alt="views icon"/>
                        <h5 className="video-details__data-text">{props.views}</h5>
                    </div>
                    <div className="video-details__likes">
                        <img className="video-details__icon" src="http://localhost:8080/images/likes.svg" alt="likes icon"/>
                        <h5 className="video-details__data-text">{props.likes}</h5>
                    </div>
                </div>
            </div>
            
            <p className="video-details__description">{props.description}</p>
        </section>
    );
}

export default VideoDetails;