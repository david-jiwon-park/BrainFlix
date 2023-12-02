// Component for list of videos under "NEXT VIDEOS"

import './VideoList.scss'
import Video from '../Video/Video';

function VideoList({videos, videoId, setVideoId}) {

    // Function to change the videoId state to the ID of the selected video that is passed through this function
    function handleVideoSelect(selectedVideo) {
        setVideoId(selectedVideo);
    };

    return (
        <div className="video-list">
            <h4 className="video-list__heading">NEXT VIDEOS</h4>

            <section>
               
                {/* Filtering out the selected video from the videos list, and then mapping the remaining videos */}
                {videos.filter((video) => {
                    return video.id !== videoId;
                })
                .map((video) => (
                    <Video 
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        channel={video.channel}
                        image={video.image}
                        handleVideoSelect={handleVideoSelect}
                    />
                ))}

            </section>
        </div>
    );
}

export default VideoList;