import './VideoUpload.scss';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/images/publish.svg';
import { Link } from 'react-router-dom';

function VideoUpload() {

    return (
        <div className='video-upload'>
            <h1 className='video-upload__heading'>Upload Video</h1>
            <h4 className='video-upload__label'>VIDEO THUMBNAIL</h4>
            <img className='video-upload__thumbnail' src={thumbnail} alt='thumbnail'/>

            <form>
                <label htmlFor="title" className="video-upload__label">TITLE YOUR VIDEO</label>
                <div className="video-upload__field-container">
                    <textarea 
                        className="video-upload__title-textarea" 
                        name="title" 
                        id="title" 
                        placeholder="Add a title to your video" 
                        required>
                    </textarea>
                </div>

                <label htmlFor="title" className="video-upload__label">ADD A VIDEO DESCRIPTION</label>
                <div className="video-upload__field-container">
                    <textarea 
                        className="video-upload__description-textarea" 
                        name="title" 
                        id="title" 
                        placeholder="Add a description to your video" 
                        required>
                    </textarea>
                </div>
                
                <div className="video-upload__links-container">
                    <div className="video-upload__publish-button-container">
                        <button id="publish-button" className="video-upload__publish-button">
                            PUBLISH
                        </button>
                        <img className="video-upload__publish-icon" src={publishIcon} alt="publish icon"/>
                    </div>

                    <Link className="video-upload__cancel-link" to="/">
                        <h4>CANCEL</h4>
                    </Link>
                </div>
            </form> 

            
        </div>
    )
};

export default VideoUpload;