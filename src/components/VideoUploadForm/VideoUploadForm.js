import './VideoUploadForm.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import { apiBaseURL } from "../../utilities/utilities";

function VideoUploadForm() {
    const navigate = useNavigate();
    const formRef = useRef();

    // Creating submit handler that posts video to API, confirms submission, and navigates user to home page upon successful submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios
        .post(`${apiBaseURL}/videos`, {
            title: formRef.current.title.value, 
            description: formRef.current.description.value, 
        })
        .then((response) => {
            alert("Your video has been uploaded!");
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
            alert("There was an issue with uploading your video. Please try uploading the video again later.");
        })
    };
        
    return (  
        <form onSubmit={handleFormSubmit} ref={formRef}>
            <div className="video-upload-form__desktop-fields-container">
                
                <div className="video-upload-form__thumbnail-container"> 
                    <h4 className='video-upload-form__label-thumbnail'>VIDEO THUMBNAIL</h4>
                    <img className='video-upload-form__thumbnail' src={`${apiBaseURL}/images/Upload-video-preview.jpg`} alt='thumbnail'/>
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
                    <button type="submit" id="publish-button" className="video-upload-form__publish-button">PUBLISH</button>
                    <img className="video-upload-form__publish-icon" src={`${apiBaseURL}/images/publish.svg`} alt="publish icon"/>
                </div>

                <Link className="video-upload-form__cancel-link" to="/">
                    <h4 className="video-upload-form__cancel-text">CANCEL</h4>
                </Link>
            </div>
        </form> 
    )
};

export default VideoUploadForm;