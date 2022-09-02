import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Pokedex from '../pages/Pokedex/Pokedex';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path="/pokedex" element={ <Pokedex/> }/>
            <Route path="/detalhes" element={ <DetailsPage/> }/>
            <Route path="/404" element={ <ErrorPage/> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;