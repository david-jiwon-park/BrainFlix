import './Video.scss'

function Video(props) {
    
    function handleClick() {
        props.handleVideoSelect(props.id);
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