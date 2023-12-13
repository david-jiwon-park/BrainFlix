// Component that contains everything in the website that is below the Header

import './MainVideo.scss';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentsSection from "../CommentsSection/CommentsSection";
import VideoList from "../VideoList/VideoList";

import { useState, useEffect } from 'react';
import axios from 'axios';

import videoDetails from '../../data/video-details.json';

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

    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

    const [videoList, setVideoList] = useState([]);

    const apiKey = "6c48d56b-7328-4baa-8258-e0484f8c987e";

    useEffect(() => {
        axios
        .get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
        .then((response) => {
            setCurrentVideo(response.data);
        });
    }, []);


    useEffect(() => {
        axios
        .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
        .then((response) => {
            setVideoList(response.data)
        });
    }, []);

    

    return (
        <main>
            
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
                        formatDate={formatDate}
                    />
                    
                    <CommentsSection 
                        comments={currentVideo.comments}
                        formatDate={formatDate}
                    />

                </div>
                
                <VideoList 
                    videoList={videoList} 
                    videoId={videoId} 
                />

            </div>
            
        </main>
    );
}

export default MainVideo;
