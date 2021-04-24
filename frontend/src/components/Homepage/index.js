import { useSelector, useDispatch } from 'react-redux';
import { getCocktails } from '../../store/cocktail';
import { useEffect, useState } from 'react';
import Cocktail from '../Cocktail';

export default function Homepage() {

    const cocktails = useSelector(state => {
        return state.cocktails.list.map(cocktailId => state.cocktails[cocktailId]);
    })
    console.log(cocktails)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [])
    return (
        <div>
            <h2>Cocktails Homepage</h2>
            <ul>
                {cocktails.map(cocktail => (
                    <li key={cocktail.id}><Cocktail cocktail={cocktail} /></li>
                    // <li key={cocktail.id}>{cocktail.citrus}</li>
                ))}
            </ul>
        </div>

    )
}