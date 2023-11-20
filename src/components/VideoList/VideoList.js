import './VideoList.scss'
import Video from '../Video/Video';

function VideoList({videos, videoId, setVideoId}) {

    function handleVideoSelect(selectedVideo) {
        setVideoId(selectedVideo);
    };


    return (
        <div className="video-list">
            <h4 className="video-list__heading">NEXT VIDEOS</h4>

            <section>
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