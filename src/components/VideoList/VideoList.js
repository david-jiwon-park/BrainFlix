import './VideoList.scss'
import Video from '../Video/Video';

function VideoList(props) {

    return (
        <div className="video-list">
            <h4 className="video-list__heading">NEXT VIDEOS</h4>

            <section>
                {props.videoList.map((video) => (
                    <Video 
                        key={video.id}
                        title={video.title}
                        channel={video.channel}
                        image={video.image}
                    />

                ))}
            </section>

        </div>
    );

}

export default VideoList;