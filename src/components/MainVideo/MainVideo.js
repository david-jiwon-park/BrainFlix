import './MainVideo.scss';
import videoDetails from '../../data/video-details.json';
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentsSection from "../CommentsSection/CommentsSection";
import videos from '../../data/videos.json';
import VideoList from "../VideoList/VideoList";
import { useState } from "react";


function MainVideo() {
   

    const [videoId, setVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");

    const videoIndex = (videoDetails.map(video => video.id).indexOf(videoId));



    return (
        <div>
            <div className="video-wrapper">
                <video controls poster={videoDetails[videoIndex].image}></video>
            </div>
            <div className="desktop-container">
                <div className="desktop-container__video-details-comments">
                    <VideoDetails 
                        title={videoDetails[videoIndex].title}
                        channel={videoDetails[videoIndex].channel}
                        timestamp={videoDetails[videoIndex].timestamp}
                        views={videoDetails[videoIndex].views}
                        likes={videoDetails[videoIndex].likes}
                        description={videoDetails[videoIndex].description}
                    />

                    <CommentsSection comments={videoDetails[videoIndex].comments}/>
                </div>
                
                <VideoList videos={videos} videoId={videoId} setVideoId={setVideoId}/>
                
            </div>
        </div>

    );
}

export default MainVideo;
