// Page Component for Home Page and for when the user selects a video in the Next Videos list

import './HomePage.scss';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import VideoList from "../../components/VideoList/VideoList";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
   
    // Creating state that will store the video list
    const [videoList, setVideoList] = useState([]);

    // Making an API get request to retrieve video list from the API, and storing it in the videoList state
	useEffect(() => {
		axios
        .get(`http://localhost:8080/videos`)
        .then((response) => {
			setVideoList(response.data)
		})
        .catch((error) => {
            console.log("Failed to retrieve the video list");
        });
    }, []);

    // Setting defaultVideoId to the first video in the video list retrieved from the API (i.e. the video that will be on the page in the "/" path) 
    const defaultVideoId = videoList[0]?.id

    const params = useParams();

    // Creating a ternary where videoId will initially be the defaultVideoId, and then change to the ID of the video that the user clicked on in the video list  
    const videoId = params.videoId ? params.videoId : defaultVideoId;

    // Creating state that will store details of the current video (i.e. default video, or video that was selected in the videos list by the user)
    const [currentVideo, setCurrentVideo] = useState({});

    // Making an API get request to retrieve video details for the current video using its ID (i.e. videoId), and storing it in the currentVideo state
	useEffect(() => {
		if (!videoId) {
			return;
		}
		axios
        .get(`http://localhost:8080/videos/${videoId}`)
        .then((response) => {
            setCurrentVideo(response.data);
            window.scrollTo(0, 0);
        })
        .catch((error) => {
            console.log("Failed to retrieve this video ID");
        });
	}, [videoId]);

    return (
        <>
            {currentVideo ? 
            (<>
                <VideoPlayer videoPoster={currentVideo.image}/>
                    
                <div className="desktop-container">
                    <div className="desktop-container__video-details-comments">
                                
                        <VideoDetails 
                            title={currentVideo.title}
                            channel={currentVideo.channel}
                            timestamp={currentVideo.timestamp}
                            views={currentVideo.views}
                            likes={currentVideo.likes}
                            description={currentVideo.description}
                        />
                                
                        <CommentsSection 
                            comments={currentVideo.comments}
                        />
                        
                    </div>
                        
                    <VideoList 
                            videoList={videoList} 
                            videoId={videoId} 
                    />

                </div>
            </>)
		    : null}
        </>
    );
}

export default HomePage;
