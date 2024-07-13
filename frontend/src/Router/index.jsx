import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom"

import Login from "../Components/Login";
import Homepage from "../Components/Home";

export default function RoutsPage(){

    return(

        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={ <Login/> } />
            <Route path="/home"  element={ <Homepage/> }/>

        </Routes>

        </BrowserRouter>
        
    )

}