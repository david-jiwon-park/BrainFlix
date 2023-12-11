// Component for Upload Button in Header

import './UploadButton.scss';
import uploadIcon from '../../assets/images/upload.svg';

import { Link } from 'react-router-dom';

function UploadButton() {
    return (
        <div className="upload-button">
            <Link to='/videoupload'>
                <button id="upload-button" className="upload-button__button">
                    UPLOAD
                </button>
                <img className="upload-button__icon" src={uploadIcon} alt="upload icon"/>
            </Link>
        </div>
    );
}

export default UploadButton;