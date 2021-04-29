import { useParams, } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCocktails, addComment } from '../../store/cocktail';
import './SingleCocktail.css';

export default function SingleCocktail() {
    const { id } = useParams();

    const cocktail = useSelector(state => state.cocktails[id]);
    const sessionUserId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { comment } = e.target;
        // console.log('submitted', comment.value);
        dispatch(addComment({ content: comment.value, cocktailId: id, userId: sessionUserId }));
        comment.value = '';
    }
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
                <h2 className='comment-header'>Comments</h2>
                <div className='comments-div'>
                    {cocktail?.Comments.length ? cocktail.Comments.map(comment => (
                        <div className='single-comment-div'>
                            <p>{comment.User.username}</p>
                            <p>{comment.content}</p>
                        </div>
                    )) : <p>No comments yet...</p>}
                    <form id='comment-form' onSubmit={handleSubmit}>
                        <textarea name="comment" id="" rows="5"></textarea>
                        <button type='submit'>Add comment</button>
                    </form>
                </div>
            </div>
        </div>
    )
}