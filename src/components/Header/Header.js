// Component for Header

import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import UploadButton from '../UploadButton/UploadButton';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="desktop-container">
            <header className="header">
                <Link to='/'>
                    <img className="header__logo" src="http://localhost:8080/images/BrainFlix-logo.svg" alt="logo"/>
                </Link>

                <SearchBar/>
                
                <UploadButton/>
                
                <img className="header__pfp-td" src="http://localhost:8080/images/Mohan-muruge.jpg" alt="profile icon"/>
            </header>
        </div>
    );
}

export default Header;