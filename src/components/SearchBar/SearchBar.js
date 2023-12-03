// Component for Search Bar within Header

import './SearchBar.scss';
import searchIcon from '../../assets/images/search.svg';
import pfp from '../../assets/images/Mohan-muruge.jpg';

function SearchBar() {
    return (
        <div className="search-bar">
            <form className="search-bar__form">
                <input 
                    className="search-bar__input"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                />
                <img className="search-bar__icon" src={searchIcon} alt="search icon"/>
            </form>
            <img className="search-bar__pfp-mobile" src={pfp} alt="profile icon"/>
        </div>
    );
}

export default SearchBar;