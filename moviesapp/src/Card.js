import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import movieImage from "./movieImage.jpg";
import "./card.css";
import Movies from "./Movies.json";
import { Link } from "react-router-dom";

const Card = () => {
  useEffect(() => {
    callApi();
  }, []);

  const [apiData, setApiData] = useState();
  async function callApi() {
    // fetch("http://localhost:8000/movies")
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
    let response = await fetch("http://localhost:8000/movies");
    let moviesData = await response.json();
    console.log(moviesData);
    setApiData(moviesData);
  }

  return (
    <div className="mainCard">
      {Movies.map((item, index) => {
        return (
          <div className="card col-md-2" key={index}>
            <div className="img">
              <img src={movieImage} className="App-logo" alt="logo" />
            </div>
            <div className="card-body">
              <h5>{item.name}</h5>
              <div>
                <p>
                  Rating: <strong>{item.rating}</strong>
                </p>
                <p>
                  Release Date: <strong>{item.release_date}</strong>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
