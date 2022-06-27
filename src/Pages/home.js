import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <div className="container">
        <div className="homediv row rounded">
        <h2 className="text-center text-light mt-2">
            Welcome to our movies site!
        </h2>
        <div className="text-center">
        <Link to={"/movies"}>
        <button className="btn btn-light but col-2 my-5">
             Get started
        </button>
        </Link>
        </div>
        </div>
        </div>
        </>
    )
}