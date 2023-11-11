import './Header.scss';
import brainflixLogo from '../../assets/images/BrainFlix-logo.svg';
import searchIcon from '../../assets/images/search.svg';
import pfp from '../../assets/images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/images/upload.svg';

function Header() {

    return (
        <header className="header">
            
            <img src={brainflixLogo} alt="logo"/>

            <div className="header__search-bar-container">
                <div className="header__search-bar">
                    <input 
                        className="header__search-input"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                    />
                    <img className="header__search-icon" src={searchIcon} alt="search icon"/>
                </div>
                <img className="header__pfp" src={pfp} alt="pfp"/>
            </div>

            <div className="header__button-container">
                <button id="upload-button" className="header__button">
                    UPLOAD
                </button>
                <img className="header__upload-icon" src={uploadIcon} alt="upload icon"/>
            </div>

        </header>
    );
}

export default Header;