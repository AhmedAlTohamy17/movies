import React, { useContext } from "react";
import { Link,NavLink } from "react-router-dom";
import LangContext from "../context/lang";

export default function Navbar() {
  const {lang,setLang} = useContext(LangContext)
  let change=()=>{
    setLang(lang==="en"?"ar":"en")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={ lang== 'ar'? {direction:"rtl"} : {direction:"ltr"} }>
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
        <span class="badge bg-primary fs-5">Movies</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link text-light" exact to="/" style={isActive => ({
    backgroundColor: isActive ? "lime" : "gray"
  })}>
              Home
            </NavLink>
            <NavLink className="nav-link text-light" to="/Movies" style={isActive => ({
    backgroundColor: isActive ? "lime" : "gray"
  })}>
              Movies
            </NavLink>
            <NavLink className="nav-link" to="/favourites" style={isActive => ({
    backgroundColor: isActive ? "lime" : "gray"
  })}>
              Favourits
            </NavLink>

  <button onClick={change}>
  Change language
  </button>
          </div>
        </div>
      </div>
    </nav>
  );
}