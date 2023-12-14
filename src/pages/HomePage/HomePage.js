// Component that contains everything in the website that is below the Header

import './HomePage.scss';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import VideoList from "../../components/VideoList/VideoList";

import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage({videoList, apiKey}) {
   
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

    const videoId = videoList[0]?.id

    const [currentVideo, setCurrentVideo] = useState({});


    useEffect(() => {
        if (!videoId) {
            return;
        }
        axios
        .get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
        .then((response) => {
            setCurrentVideo(response.data);
        });
    }, [videoId, apiKey]);

    return (
        <>
        {currentVideo ? 
            (<main>
                
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
                
            </main>)
        : null}
    </>
    );
}

export default HomePage;
