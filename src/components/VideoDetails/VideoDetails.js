import './VideoDetails.scss';
import viewsIcon from '../../assets/images/views.svg';
import likesIcon from '../../assets/images/likes.svg';


function VideoDetails(props) {

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
        <div className="video-details">
            <h1 className="video-details__title">{props.title}</h1>

            <div className="video-details__data">

                <div className="video-details__data--left">
                    <h5 className="video-details__channel">By {props.channel}</h5>
                    <h5>{formattedDate}</h5>
                </div>
                    
                <div>
                    <div className="video-details__views">
                        <img className="video-details__icon" src={viewsIcon} alt="views icon"/>
                        <h5>{props.views}</h5>
                    </div>

                    <div className="video-details__likes">
                        <img className="video-details__icon" src={likesIcon} alt="likes icon"/>
                        <h5>{props.likes}</h5>
                    </div>
                </div>

            </div>

            <p className="video-details__description">{props.description}</p>

        </div>

    );
}

export default VideoDetails;