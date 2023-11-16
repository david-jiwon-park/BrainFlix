import VideoDetails from "../VideoDetails/VideoDetails";
import CommentsSection from "../CommentsSection/CommentsSection";
import VideoList from "../VideoList/VideoList";


function MainVideo(props) {
   
    return (
        <div>
            <video width="100%" controls poster={props.videoList[0].image}>
            </video>
        
            <VideoDetails 
                title={props.videoList[0].title}
                channel={props.videoList[0].channel}
                timestamp={props.videoList[0].timestamp}
                views={props.videoList[0].views}
                likes={props.videoList[0].likes}
                description={props.videoList[0].description}
            />

            <CommentsSection comments={props.videoList[0].comments}/>
        
            <VideoList videoList={props.videoList}/>
        
        </div>

    );
}

export default MainVideo;
