import { useSelector, useDispatch } from 'react-redux';
import { getCocktails } from '../../store/cocktail';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cocktail from '../Cocktail';
import Search from '../Search';
import FeaturedCocktail from '../FeaturedCocktail';
import './Home.css';

export default function Homepage() {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])



    return (
        <div id="home-container">
            <div id="featured-cocktail-container">
                {/* <h2>I'm a featured cocktail</h2> */}
                <FeaturedCocktail />
            </div>
            <div className="cocktail-search-container">
                <h1>Cocktails</h1>
                <Search />
            </div>

        </div>

    )
}