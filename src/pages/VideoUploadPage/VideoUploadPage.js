// Page Component for Video Upload Page

import './VideoUploadPage.scss';
import VideoUploadForm from '../../components/VideoUploadForm/VideoUploadForm';

function VideoUploadPage() {
    return (
        <div className='video-upload'>
            <div className="video-upload__desktop-container">
                <h1 className='video-upload__heading'>Upload Video</h1>
                
                <VideoUploadForm/>

            </div>
        </div>
    )
};

export default VideoUploadPage;