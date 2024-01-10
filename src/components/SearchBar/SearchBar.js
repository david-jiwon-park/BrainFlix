// Component for Search Bar within Header

import './SearchBar.scss';

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
                <img className="search-bar__icon" src="http://localhost:8080/images/search.svg" alt="search icon"/>
            </form>
            <img className="search-bar__pfp-mobile" src="http://localhost:8080/images/Mohan-muruge.jpg" alt="profile icon"/>
        </div>
    );
}

export default SearchBar;