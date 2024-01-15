// Component for Search Bar within Header

import './SearchBar.scss';
import { apiBaseURL } from "../../utilities/utilities";

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
                <img className="search-bar__icon" src={`${apiBaseURL}/images/search.svg`} alt="search icon"/>
            </form>
            <img className="search-bar__pfp-mobile" src={`${apiBaseURL}/images/Mohan-muruge.jpg`} alt="profile icon"/>
        </div>
    );
}

export default SearchBar;