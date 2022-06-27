import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import axiosInstance from "../network/axiosInstance";


export default function MoviesDetails() {
  const [details, setDetails] = useState({});

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    axiosInstance
      .get(`./movie/${params.id}`)
      .then((res) => setDetails(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{width:"25rem"}}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          className="card-img-top my-3"
          alt={details.title}
          style={{
            height: "15em",
            objectFit: "contain",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{details.title}</h5>
          <p className="card-text">{details.overview}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Revenue: {details.revenue} $</li>
          <li className="list-group-item">Release date: {details.release_date}</li>
        </ul>
        <div className="card-body">
          {/* navigate(-1) */}
          {/* navigate(+1) */}
          <button onClick={() => history.goBack()} className="btn btn-primary">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
