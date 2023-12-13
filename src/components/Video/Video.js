// Component for each video that is mapped from the videos list

import './Video.scss'

function Video(props) {
    

    return (
        <article className="video">
            <img className="video__image" src={props.image} alt="thumbnail"/>
            <div className="video__text">
                <h4 className="video__title">{props.title}</h4>
                <p className="video__channel">{props.channel}</p>
            </div>
        </article>

    );
}




export default Video;