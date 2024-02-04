import React, { useEffect, useState } from "react";
import Card from "./Card";

const Searchmodal = ({ searchText, setSearchText }) => {
  const [myAllMovie, setMyAllMovie] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const fetchData = async () => {
    const searchValue = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchText}`
    );
    const searchJson = await searchValue.json();
    //console.log(searchJson);
    setMyAllMovie(searchJson);
  };

  return (
    <div className="search-modal active">
      <p className="label">Result for</p>
      <h1 className="heading">{searchText}</h1>
      <div className="movie-list">
        <section id="schedule" className="schedule">
          <div className="container-fluid">
            <div className="card-prop">
              {myAllMovie &&
                myAllMovie.length > 0 &&
                myAllMovie.map((movie) => (
                  <Card key={movie?.show?.id} movie={movie} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Searchmodal;
