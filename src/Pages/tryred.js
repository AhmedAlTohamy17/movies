import react from "react";
import { useSelector } from "react-redux";
const fav =useSelector((state)=>state.favourite.currentFavourite)
export default function TryRed(){
    return(
<>
<p>currentmovie:{fav}</p>
</>
    )
}