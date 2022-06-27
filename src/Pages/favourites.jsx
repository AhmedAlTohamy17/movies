import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MoviesCard from '../Components/moviecard'

const Favourites = () => {
    const selector = useSelector((s) => s.favourite.currentFavourite)
    const [favMovie, setFavMovie] = useState()
    useEffect(() => {
        setFavMovie(selector)
        console.log();
    }, [])
    return (
        <div>
            {favMovie ?
                favMovie.map(movie => {
                    return (
                        <div key={movie.id}><MoviesCard item={movie} /></div>
                    )
                }) : null}
        </div>
    )
}

export default Favourites