import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import UploadButton from '../UploadButton/UploadButton';
import brainflixLogo from '../../assets/images/BrainFlix-logo.svg';
import pfp from '../../assets/images/Mohan-muruge.jpg';


function Header() {

    return (
        <div className="desktop-container">
            <header className="header">
                <img className="header__logo" src={brainflixLogo} alt="logo"/>

                <SearchBar />

                <UploadButton />

                <img className="header__pfp-td" src={pfp} alt="profile picture"/>
            </header>
        </div>
    );
}

export default Header;