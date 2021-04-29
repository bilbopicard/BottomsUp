import { useSelector, useDispatch } from 'react-redux';
import { getCocktails } from '../../store/cocktail';
import { useEffect, useState } from 'react';
import Search from '../Search';
import FeaturedCocktail from '../FeaturedCocktail';
import './Home.css';
import { Redirect } from 'react-router-dom';
export default function Homepage() {

    const sessionUser = useSelector(state => state.session.user)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])

    if (!sessionUser) {
        return <Redirect to='/signup' />
    }

    return (
        <div id="home-container">
            <div id="featured-cocktail-container">
                {/* <h2>I'm a featured cocktail</h2> */}
                <FeaturedCocktail />
            </div>
            <div className="cocktail-search-container">
                <h2>Cocktails</h2>
                <Search />
            </div>

        </div>

    )
}