import { useParams, } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCocktails } from '../../store/cocktail';
import './SingleCocktail.css';

export default function SingleCocktail() {
    const { id } = useParams();

    const cocktail = useSelector(state => state.cocktails[id]);
    console.log(cocktail)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [])

    return (
        <div className='single-cocktail-div'>
            <h2>Cocktail Page</h2>
            <div className='inner-div'>

                <p>{cocktail.name}</p>
                <p>{cocktail.recipe}</p>
                <p>{cocktail.description}</p>
            </div>
        </div>
    )
}