// Component for list of videos under "NEXT VIDEOS"

import './VideoList.scss'
import Video from '../Video/Video';

import { Link } from 'react-router-dom';

function VideoList({videoList, videoId}) {


    return (
        <section className="video-list">
            <h4 className="video-list__heading">NEXT VIDEOS</h4>

            {/* Filtering out the selected video from the videos list, and then mapping the remaining videos */}
            {videoList.filter((video) => {
                return video.id !== videoId;
            })
            .map((video) => (
                <Video 
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    channel={video.channel}
                    image={video.image}
                />
            ))}

        </section>
    );
}

export default VideoList;