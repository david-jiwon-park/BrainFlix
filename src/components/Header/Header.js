import './Header.scss';
import brainflixLogo from '../../assets/images/BrainFlix-logo.svg';
import searchIcon from '../../assets/images/search.svg';
import pfp from '../../assets/images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/images/upload.svg';

function Header() {

    return (
        <div className="desktop-container">
            <header className="header">
                
                <img className="header__logo" src={brainflixLogo} alt="logo"/>

                {/* Make search bar into component */}
                <div className="header__search-bar-container">
                    <form className="header__search-bar">
                        <input 
                            className="header__search-input"
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                        />
                        <img className="header__search-icon" src={searchIcon} alt="search icon"/>
                    </form>
                    <img className="header__pfp-mobile" src={pfp} alt="profile picture"/>
                </div>

                {/* Make button into component */}
                <div className="header__button-container">
                    <button id="upload-button" className="header__button">
                        UPLOAD
                    </button>
                    <img className="header__upload-icon" src={uploadIcon} alt="upload icon"/>
                </div>

                <img className="header__pfp-td" src={pfp} alt="profile picture"/>

            </header>
        </div>
    );
}

export default Header;