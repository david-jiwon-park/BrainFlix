// Component that contains everything in the website that is below the Header

import './MainVideo.scss';
import videoDetails from '../../data/video-details.json';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentsSection from "../CommentsSection/CommentsSection";
import VideoList from "../VideoList/VideoList";

import { useState, useEffect } from 'react';
import axios from 'axios';

function MainVideo() {
   
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

    // React State for video ID of selected video, starting Video ID is for the "BMX Rampage: 2021 Highlights" video so that it appears by default
    const [videoId, setVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");

    const [video, setVideo] = useState([]);

    const apiKey = "6c48d56b-7328-4baa-8258-e0484f8c987e";

    useEffect(() => {
        axios
        .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
        .then((response) => {
            setVideo(response.data)
        });
    }, [])


    // Variable that converts the video ID obtained from the videoId state into the index for that video within the video-details.json file
    const videoIndex = (videoDetails.map(video => video.id).indexOf(videoId));


    return (
        <main>
            
            <VideoPlayer videoPoster={videoDetails[videoIndex].image}/>
            
            <div className="desktop-container">
                <div className="desktop-container__video-details-comments">
                    
                    <VideoDetails 
                        title={videoDetails[videoIndex].title}
                        channel={videoDetails[videoIndex].channel}
                        timestamp={videoDetails[videoIndex].timestamp}
                        views={videoDetails[videoIndex].views}
                        likes={videoDetails[videoIndex].likes}
                        description={videoDetails[videoIndex].description}
                        formatDate={formatDate}
                    />
                    
                    <CommentsSection 
                        comments={videoDetails[videoIndex].comments}
                        formatDate={formatDate}
                    />

                </div>
                
                <VideoList 
                    videos={video} 
                    videoId={videoId} 
                    setVideoId={setVideoId}
                />

            </div>
            
        </main>
    );
}

export default MainVideo;
