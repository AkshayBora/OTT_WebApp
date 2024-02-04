import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

const Header = ({ searchText, setSearchText }) => {
  const [active, setActive] = useState(false);

  const handleActiveSearch = (event) => {
    setActive((current) => !current);
    setSearchText("");
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src={Logo} width="70" height="32" alt="MyMovies" />
          <h3>MyMovies</h3>
        </Link>

        <div className={`search-box ${active ? "active" : ""}`} id="search-box">
          <div className={`search-wrapper`}>
            <input
              type="text"
              name="search"
              aria-label="search movies"
              placeholder="Search movie here..."
              className="search-field"
              autoComplete="off"
              value={searchText}
              onChange={(e) => {
                //console.log(searchText);
                //console.log(e.target.value);
                setSearchText(e.target.value);
              }}
            />
            <i className="fa-solid fa-magnifying-glass leading-icon"></i>
          </div>

          <Link to="/">
            <button className="search-btn" onClick={handleActiveSearch}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </Link>
        </div>

        <Link to="/search">
          <button
            className="search-btn"
            id="search-btn"
            onClick={handleActiveSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </Link>
      </header>
    </>
  );
};

export default Header;
