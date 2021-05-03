import { useParams, useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCocktails, addComment, deleteComment } from '../../store/cocktail';
import './SingleCocktail.css';

export default function SingleCocktail() {


    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const { id } = useParams();
    const cocktail = useSelector(state => state.cocktails[id]);
    const cocktailComments = useSelector(state => state.cocktails[id]?.Comments);
    const sessionUserId = useSelector(state => state.session.user?.id);
    // console.log(cocktailComments);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])

    if (!sessionUser) {
        history.push('/');
    }

    const niceDateFormat = (createdAt) => {
        let d = new Date(createdAt),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            hh = d.getHours(),
            m = d.getMinutes();

        let dd = "AM";
        let h = hh;
        if (h >= 12) {
            h = hh - 12;
            dd = "PM";
        }
        if (h === 0) {
            h = 12;
        }
        m = m < 10 ? "0" + m : m;

        return [[month, day, year].join('-'), ' ', [h, m].join(':'), ' ', dd];
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const { id } = e.target;
        console.log(id)
        dispatch(deleteComment({ id }));
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
                <h1 id='single-cocktail-title'>{cocktail?.name}</h1>
                <img className='cocktail-photo' src={`${cocktail?.imageUrl}`} alt={`${cocktail?.name}`} />
                <h4 className='ingredients'>Ingredients</h4>
                <div className='recipe-div'>
                    {cocktail?.recipe.split(',').map(step => (
                        <p key={step} className='cocktail-info'>{step}</p>
                    ))}
                </div>
                <div className='description-div'>
                    <h4 className='instructions'>Instructions</h4>
                    <ol id='instructions-list'>
                        {cocktail?.description.split('.').map(step => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>
                <h2 id='comment-header'>Comments</h2>
                <div className='comments-div'>
                    {cocktailComments?.length ? cocktailComments?.map(comment => (
                        <div className='single-comment-div' key={comment.id}>
                            <div id='comment-top-row'>
                                <p id='comment-user'><Link to={`/users/${comment.userId}`}>{comment.User.username}</Link></p>
                                <span id='comment-date'>{niceDateFormat(comment.createdAt)}</span>
                            </div>
                            <p id='comment-content'>{comment.content}</p>
                            <div id='delete-time'>
                                {sessionUserId === comment.userId ? <button type='submit' onClick={handleDelete} id={comment.id}>Delete</button> : null}
                            </div>

                        </div>
                    )) : <p>No comments yet...</p>}
                    <form id='comment-form' onSubmit={handleSubmit}>
                        <textarea name="comment" id="form-comment-add" rows="4" required></textarea>
                        <button type='submit'>Add comment</button>
                    </form>
                </div>
            </div>
        </div>
    )
}