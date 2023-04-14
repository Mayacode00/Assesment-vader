import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiSearch2Line } from "react-icons/ri";
import "./HeroBanner.scss";
import useFetch from "../../../hooks/useFetch";
import Image from "../../../components/LazyLoadImage/Image";
import { ContentWrapper } from "../../../components";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="app__hero-banner">
      {!loading && (
        <div className="app__hero-banner_backdrop-img">
          <Image src={background} />
        </div>
      )}
      <div className="app__hero-banner_opacity-layer"></div>
      <ContentWrapper>
        <div className="app__hero-banner_content">
          <span className="app__hero-banner_title rainbow__text">
            vader movies
          </span>
          <span className="app__hero-banner_subtitle">
            millions of movie, TV shows and people to discover, Explore now.
          </span>
          <div className="app__hero-banner_search-input">
            <RiSearch2Line />
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;


