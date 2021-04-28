import { useParams, } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCocktails } from '../../store/cocktail';
import './SingleCocktail.css';

export default function SingleCocktail() {
    const { id } = useParams();

    const cocktail = useSelector(state => state.cocktails[id]);
    console.log(cocktail.Comments)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [])

    return (
        <div className='single-cocktail-div'>

            <div className='inner-div'>
                <h1 className='cocktail-info'>{cocktail?.name}</h1>
                <img className='cocktail-photo' src={`${cocktail?.imageUrl}`} alt={`${cocktail?.name}`} />
                <div className='recipe-div'>
                    {cocktail?.recipe.split(',').map(step => (
                        <p className='cocktail-info'>{step}</p>
                    ))}
                </div>
                <p className='cocktail-info'>{cocktail?.description}</p>
            </div>
        </div>
    )
}