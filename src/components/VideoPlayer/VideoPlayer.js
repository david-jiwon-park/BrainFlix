// Component for Video Player that displays the selected video

import './VideoPlayer.scss';

function VideoPlayer({videoPoster}) {
    return (
        <div className="video-player">
            <video controls poster={videoPoster}></video>
        </div>
    );
}

export default VideoPlayer;