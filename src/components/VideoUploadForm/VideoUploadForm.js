import './VideoUploadForm.scss';
import { Link, useNavigate } from 'react-router-dom';

function VideoUploadForm() {

    const navigate = useNavigate();

    // Creating submit handler that confirms submission and navigates user to home page upon successful submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert("Your video has been uploaded!");
        navigate('/');
    }

    return (  
        <form onSubmit={handleFormSubmit}>
            <div className="video-upload-form__desktop-fields-container">
                
                <div className="video-upload-form__thumbnail-container"> 
                    <h4 className='video-upload-form__label-thumbnail'>VIDEO THUMBNAIL</h4>
                    <img className='video-upload-form__thumbnail' src="http://localhost:8080/images/Upload-video-preview.jpg" alt='thumbnail'/>
                </div>
                
                <div className="video-upload-form__textarea-fields-container">
                    <div className="video-upload-form__title-field-container">
                        <label htmlFor="title" className="video-upload-form__label-title">TITLE YOUR VIDEO</label>
                        <textarea 
                            className="video-upload-form__title-textarea" 
                            name="title" 
                            id="title" 
                            placeholder="Add a title to your video" 
                            required>
                        </textarea>
                    </div>
                    <div className="video-upload-form__description-field-container">
                        <label htmlFor="title" className="video-upload-form__label-description">ADD A VIDEO DESCRIPTION</label>
                        <textarea 
                            className="video-upload-form__description-textarea" 
                            name="description" 
                            id="description" 
                            placeholder="Add a description to your video" 
                            required>
                        </textarea>
                    </div>
                </div>
            </div>

            <div className="video-upload-form__links-container">
                <div className="video-upload-form__publish-button-container">
                    <button type="submit" id="publish-button" className="video-upload-form__publish-button">
                            PUBLISH
                    </button>
                    <img className="video-upload-form__publish-icon" src="http://localhost:8080/images/publish.svg" alt="publish icon"/>
                </div>

                <Link className="video-upload-form__cancel-link" to="/">
                    <h4 className="video-upload-form__cancel-text">CANCEL</h4>
                </Link>
            </div>
        </form> 
    )
};

export default VideoUploadForm;