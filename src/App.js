import { useState } from "react";
import {
  BrowserRouter,
   BrowserRouter as Router
  , Route
  , Switch }
   from "react-router-dom";
import './App.css';
import Navbar from "./Components/navbar";
import LangContext from "./context/lang";
import Favourites from "./Pages/favourites";
import Home from "./Pages/home";
import Movies from "./Pages/movies";
import moviesDetails from "./Pages/moviesDetails";

function App() {
  const [lang,setLang]=useState("en")
  return (
<BrowserRouter>
<LangContext.Provider value={{lang,setLang}}>
<Navbar/>
<Switch>
  <Route path={"/"} exact component={Home} />
  <Route path={"/movies"} exact component={Movies}/>
  <Route path={"/product-details/:id"} component={moviesDetails} />
  <Route path={"/favourites"} component={Favourites}/>
</Switch>
</LangContext.Provider>
</BrowserRouter>
  );
}

export default App;
