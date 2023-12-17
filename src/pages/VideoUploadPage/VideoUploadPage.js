// Page Component for Video Upload Page

import './VideoUploadPage.scss';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/images/publish.svg';
import { Link, useNavigate } from 'react-router-dom';

function VideoUploadPage() {

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert("Your video has been uploaded!");
        navigate('/');
    }

    return (
        <div className='video-upload'>
            <div className="video-upload__desktop-container">
                <h1 className='video-upload__heading'>Upload Video</h1>
                
                <form onSubmit={handleFormSubmit}>
                    <div className="video-upload__desktop-fields-container">
                        
                        <div className="video-upload__thumbnail-container"> 
                            <h4 className='video-upload__label-thumbnail'>VIDEO THUMBNAIL</h4>
                            <img className='video-upload__thumbnail' src={thumbnail} alt='thumbnail'/>
                        </div>
                        
                        <div className="video-upload__textarea-fields-container">
                            <div className="video-upload__title-field-container">
                                <label htmlFor="title" className="video-upload__label-title">TITLE YOUR VIDEO</label>
                                <textarea 
                                    className="video-upload__title-textarea" 
                                    name="title" 
                                    id="title" 
                                    placeholder="Add a title to your video" 
                                    required>
                                </textarea>
                            </div>
                            <div className="video-upload__description-field-container">
                                <label htmlFor="title" className="video-upload__label-description">ADD A VIDEO DESCRIPTION</label>
                                <textarea 
                                    className="video-upload__description-textarea" 
                                    name="description" 
                                    id="description" 
                                    placeholder="Add a description to your video" 
                                    required>
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className="video-upload__links-container">
                        <div className="video-upload__publish-button-container">
                            <button type="submit" id="publish-button" className="video-upload__publish-button">
                                    PUBLISH
                            </button>
                            <img className="video-upload__publish-icon" src={publishIcon} alt="publish icon"/>
                        </div>

                        <Link className="video-upload__cancel-link" to="/">
                            <h4 className="video-upload__cancel-text">CANCEL</h4>
                        </Link>
                    </div>
                </form> 
            </div>
        </div>
    )
};

export default VideoUploadPage;