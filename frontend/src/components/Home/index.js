import { useSelector, useDispatch } from 'react-redux';
import { getCocktails } from '../../store/cocktail';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cocktail from '../Cocktail';
import SearchBar from '../SearchBar';
import './Home.css';

export default function Homepage() {

    const cocktails = useSelector(state => {
        return state.cocktails.list.map(cocktailId => state.cocktails[cocktailId]);
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [])
    return (
        <div className="homepage-container">
            <h1>Cocktails Homepage</h1>
            <SearchBar cocktails={cocktails} />
            <ul>
                {cocktails.map(cocktail => (
                    <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`} className='cocktail-link'><Cocktail cocktail={cocktail} /></Link> </li>
                ))}
            </ul>
        </div>

    )
}