import './Header.scss';
import brainflixLogo from '../../assets/images/BrainFlix-logo.svg';
import searchIcon from '../../assets/images/search.svg';
import pfp from '../../assets/images/Mohan-muruge.jpg';

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

        </header>
    );
}

export default Header;