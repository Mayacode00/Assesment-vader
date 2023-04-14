import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import logo from "../../assets/logo.png";

import "./Header.scss";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };
  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };
  return (
    <>
      <section
        className={`app__header ${
          mobileMenu ? "app__header_mobile-view" : ""
        } ${show}`}
      >
        <ContentWrapper>
          <div className="app__header-logo" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
          </div>
          <ul className="app_header_menu-items">
            <li
              className="app__header_menu-items-list"
              onClick={() => navigationHandler("movie")}
            >
              movies
            </li>
            <li
              className="app__header_menu-items-list"
              onClick={() => navigationHandler("tv")}
            >
              tv shows
            </li>
            <li className="app__header_menu-items-list">
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>
          <div className="app__header_mobile-menu-items">
            <HiOutlineSearch onClick={openSearch} />
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <HiMenuAlt3 onClick={openMobileMenu} />
            )}
          </div>
        </ContentWrapper>
        {showSearch && (
          <div className="app__search-bar">
            <ContentWrapper>
              <div className="app__search_input">
                <input
                  type="text"
                  placeholder="Search for a movie or tv show...."
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                />
                <VscChromeClose onClick={() => setShowSearch(false)} />
              </div>
            </ContentWrapper>
          </div>
        )}
      </section>
    </>
  );
};

export default Header;
