import React from "react";

const Card = ({ movie }) => {
  //console.log(movie);
  const { name, id, genres, language, image, rating } = movie?.show;

  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
      <div className="movie-card">
        <img src={image?.original} alt="Preview-Image" />
        <p>
          {language} | {genres.join(", ")}
        </p>
        <div className="content">
          <h4>{name}</h4>
          <div className="card-icons">
            <i className="fa-solid fa-plus"></i>
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
      {/* <div className="movie-card">
        <div className="movie-poster">
          <img src={IMG} alt="Poster-Imgs" />
        </div>
      </div> */}
    </div>
  );
};

export default Card;
