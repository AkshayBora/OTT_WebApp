import React, { useContext, useEffect, useState } from "react";
import { Banner_API_URL } from "../utils/constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainData from "./MainData";

const Body = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Banner_API_URL);
    const json = await data.json();
    //console.log(json);
    setMovies(json);
  };

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies.map((movie) => (
            <div key={movie?.show?.id} className="poster">
              <div className="posterImage">
                <img src={movie?.show?.image?.original} />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">{movie?.show?.name}</div>
                <div className="posterImage__runtime">
                  <div className="posterImage_premier">
                    {movie?.show?.premiered || "2015-04-21"}
                  </div>
                  <div className="posterImage__rating">
                    <i className="fas fa-star" />{" "}
                    <span>{movie?.show?.rating?.average || "7.8"}</span>
                  </div>
                  <span>{movie?.show?.summary || " "}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <MainData />
      {/* <Searchmodal /> */}
    </>
  );
};

export default Body;
