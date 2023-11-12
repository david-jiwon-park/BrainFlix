import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";


function MainVideo(props) {
   
    return (
        <div>
            <video width="100%" controls poster={props.mainVideo[0].image}>
            </video>
        
            <VideoDetails 
                title={props.mainVideo[0].title}
                channel={props.mainVideo[0].channel}
                timestamp={props.mainVideo[0].timestamp}
                views={props.mainVideo[0].views}
                likes={props.mainVideo[0].likes}
                description={props.mainVideo[0].description}
            />

            <Comments />
        
        
        </div>

    );
}

export default MainVideo;
