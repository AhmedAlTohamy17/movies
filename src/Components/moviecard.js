import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavourite } from "../Store/actions";

export default function MoviesCard({item}){
  const selector = useSelector((s)=>s.favourite.currentFavourite)
  const [favMovie,setFavMovie]=useState()
useEffect(()=>{
 
  
},[])
  
  let dispatch = useDispatch()
  const add=(movie)=>{
    const exist = selector.find((e)=>e.id==movie.id)
    if(!exist){
      setFavMovie(selector)
      console.log(favMovie);
      selector.push(movie)
      dispatch(addToFavourite(selector));
      // console.log(selector);
    }
    else{
      let newFavMovies = selector.filter((e)=>e.id!==movie.id)
      setFavMovie(newFavMovies)
      dispatch(addToFavourite(newFavMovies));
    }
  }
    return(

  <div className="card" style={{width:"18rem",height:"40rem",overflow:"hidden"}}>
    <div className="card-text text-center bg-light fs-5"><span class="badge bg-success ">{item.vote_average}</span></div>
    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt={item.title} style={{width: "16rem;",objectFit:"scale-down"}}/>
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.overview.substring(0,55)}...</p>
      <div className="d-flex align-items-end">
      <Link to={`/product-details/${item.id}`} className="btn btn-primary">
          Go to details
        </Link>
        <button className="btn btn-danger"
         onClick={()=>add(item)}>{selector.find((e)=>e.id==item.id)?"Remove":"Add as Favourite"}</button>
        </div>
      
    </div>
  </div>



        
    )
}