// Component for each video that is mapped from the videos list

import './Video.scss'

function Video(props) {
    
    // onClick function that changes the videoId state to the ID of the video that is clicked on, and then scrolls to the top of the page
    function handleClick() {
        props.handleVideoSelect(props.id);
        window.scrollTo(0, 0);
    };

    return (
        <article className="video" onClick={handleClick}>
            <img className="video__image" src={props.image} alt="thumbnail"/>
            <div className="video__text">
                <h4 className="video__title">{props.title}</h4>
                <p className="video__channel">{props.channel}</p>
            </div>
        </article>

    );
}




export default Video;