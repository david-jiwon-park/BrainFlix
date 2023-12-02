// Component for Upload Button in Header

import './UploadButton.scss';
import uploadIcon from '../../assets/images/upload.svg';

function UploadButton() {
    return (
        <div className="upload-button">
            <button id="upload-button" className="upload-button__button">
                UPLOAD
            </button>
            <img className="upload-button__icon" src={uploadIcon} alt="upload icon"/>
        </div>
    );
}

export default UploadButton;