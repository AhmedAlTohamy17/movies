import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import MoviesCard from "../Components/moviecard";
import axiosInstance from "../network/axiosInstance";
import LangContext from "../context/lang";

export default function Movies() {
    const [movieData, setMovieData] = useState([])
    const { lang, setLang } = useContext(LangContext)
    // useEffect(()=>{},[lang])
    useEffect(() => {
        axiosInstance.get(`./movie/popular?language=${lang}`)
            .then((res) => { setMovieData(res.data.results) })
            .catch((err) => { console.log(err); })
    }, [lang])

    return (
        <>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {movieData.map((movie) => (
                        <div key={movie.id} className="my-3 h-50">
                            <MoviesCard item={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}