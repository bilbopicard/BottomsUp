import { useParams, } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCocktails } from '../../store/cocktail';
import './SingleCocktail.css';

export default function SingleCocktail() {
    const { id } = useParams();

    const cocktail = useSelector(state => state.cocktails[id]);

    console.log(cocktail?.Comments)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])

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
                <div className='description-div'>
                    <ol>
                        {cocktail?.description.split('.').map(step => (

                            <li>{step}</li>

                        ))}
                    </ol>
                </div>
                {/* <p className='cocktail-info'>{cocktail?.description}</p> */}
                <div className='comments-div'>
                    {cocktail?.Comments.length ? cocktail.Comments.map(comment => (
                        <div>
                            <p>{comment.User}</p>
                            <p>{comment.content}</p>
                        </div>
                    )) : <p>Leave a comment</p>}
                </div>
            </div>
        </div>
    )
}