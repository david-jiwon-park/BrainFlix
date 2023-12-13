// Component that contains everything in the website that is below the Header

import './VideoDetailsPage.scss';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import VideoList from "../../components/VideoList/VideoList";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import videoDetails from '../../data/video-details.json';

function VideoDetailsPage() {
   
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


    const { videoId } = useParams();
    console.log(videoId);



    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

    const [videoList, setVideoList] = useState([]);

    const apiKey = "6c48d56b-7328-4baa-8258-e0484f8c987e";

    useEffect(() => {
        axios
        .get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
        .then((response) => {
            setCurrentVideo(response.data);
        });
    }, [videoId]);


    useEffect(() => {
        axios
        .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
        .then((response) => {
            setVideoList(response.data)
        });
    }, [videoId]);

    
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

export default VideoDetailsPage;
