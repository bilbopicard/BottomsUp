import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCocktails, addComment } from '../../store/cocktail';
import './SingleCocktail.css';

export default function SingleCocktail() {

    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const { id } = useParams();
    const cocktail = useSelector(state => state.cocktails[id]);
    const cocktailComments = useSelector(state => state.cocktails[id]?.Comments);
    const sessionUserId = useSelector(state => state.session.user.id);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])

    if (!sessionUser) {
        history.push('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { comment } = e.target;
        dispatch(addComment({ content: comment.value, cocktailId: id, userId: sessionUserId }));
        comment.value = '';
    }

    return (
        <div className='single-cocktail-div'>
            <div className='inner-div'>
                <h1 className='cocktail-info'>{cocktail?.name}</h1>
                <img className='cocktail-photo' src={`${cocktail?.imageUrl}`} alt={`${cocktail?.name}`} />
                <div className='recipe-div'>
                    <h4 className='ingredients'>Ingredients</h4>
                    {cocktail?.recipe.split(',').map(step => (
                        <p key={step} className='cocktail-info'>{step}</p>
                    ))}
                </div>
                <div className='description-div'>
                    <h4 className='instructions'>Instructions</h4>
                    <ol>
                        {cocktail?.description.split('.').map(step => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>
                <h2 className='comment-header'>Comments</h2>
                <div className='comments-div'>
                    {cocktailComments?.length ? cocktailComments?.map(comment => (
                        <div className='single-comment-div' key={comment.id}>
                            <p>{comment.User.username}</p>
                            <p >{comment.content}</p>
                        </div>
                    )) : <p>No comments yet...</p>}
                    <form id='comment-form' onSubmit={handleSubmit}>
                        <textarea name="comment" id="form-comment-add" rows="5"></textarea>
                        <button type='submit'>Add comment</button>
                    </form>
                </div>
            </div>
        </div>
    )
}