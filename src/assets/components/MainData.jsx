import React, { useEffect, useState } from "react";
import { Banner_API_URL } from "../utils/constants";
import Card from "./Card";

const MainData = () => {
  const listData = [
    {
      id: 1,
      name: "All",
      active: true,
    },
    {
      id: 2,
      name: "Drama",
      active: false,
    },
    {
      id: 3,
      name: "Romance",
      active: false,
    },
    {
      id: 4,
      name: "Comedy",
      active: false,
    },
    {
      id: 5,
      name: "Science-Fiction",
      active: false,
    },
    {
      id: 6,
      name: "Crime",
      active: false,
    },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [lists, setList] = useState(listData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Banner_API_URL);
    const json = await data.json();
    //console.log(json[0].show.genres);
    setData(json);
    setMovies(json);
  };

  const handleFilterMovie = (category) => {
    const activeList = lists.map((list) => {
      list.active = false;
      if (list.name === category) {
        list.active = true;
      }
      return list;
    });
    setList(activeList);

    if (category === "All") {
      setMovies(data);
      return;
    }
    const filteredList = data.filter((movie) =>
      movie?.show?.genres.includes(category)
    );
    setMovies(filteredList);
  };

  return (
    <main>
      <section className="schedule">
        <div className="container-fluid">
          <div className="">
            <h4 className="section-title">My Movies</h4>
          </div>
          <div className="row">
            <ul className="filters">
              {lists.map((list) => (
                <li
                  key={list.id}
                  className={`${list.active ? "active" : undefined}`}
                  onClick={() => handleFilterMovie(list.name)}
                >
                  {list.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-prop">
            {movies &&
              movies.length > 0 &&
              movies.map((movie) => (
                <Card key={movie?.show?.id} movie={movie} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainData;
