// Component for Header

import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import UploadButton from '../UploadButton/UploadButton';
import brainflixLogo from '../../assets/images/BrainFlix-logo.svg';
import pfp from '../../assets/images/Mohan-muruge.jpg';

import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="desktop-container">
            <header className="header">
                <Link to='/'>
                    <img className="header__logo" src={brainflixLogo} alt="logo"/>
                </Link>

                <SearchBar/>
                
                <UploadButton/>
                
                <img className="header__pfp-td" src={pfp} alt="profile icon"/>
            </header>
        </div>
    );
}

export default Header;