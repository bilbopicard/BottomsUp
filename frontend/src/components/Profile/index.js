import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getCocktails } from '../../store/cocktail';
import { getUsers } from '../../store/users';
import './Profile.css';

function Profile() {

    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    if (!sessionUser) {
        history.push('/');
    }
    const { id } = useParams();
    const comments = useSelector(state => state.cocktails.list.map(cocktailId => state.cocktails[cocktailId].Comments));

    let filteredComments = [];
    comments.forEach(comment => comment.forEach(innerComment => {
        // console.log(innerComment.userId, Number(id))
        if (innerComment.userId === Number(id)) {
            filteredComments.push(innerComment);
        }
    }))

    useSelector(state => filteredComments.forEach(comment => {
        comment.imageUrl = state.cocktails[comment.cocktailId].imageUrl;
        comment.cocktailName = state.cocktails[comment.cocktailId].name;
    }))


    const currentProfileUser = useSelector(state => state.users[id]);
    // console.log(currentProfileUser);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <div id='profile-container'>
            <h1 id='profile-title'>{currentProfileUser?.username}</h1>
            <h2>Comments left on cocktails...</h2>
            {filteredComments.map(comment => (
                <div key={comment.id} className='inner-profile-container'>
                    <Link to={`/cocktails/${comment.cocktailId}`} className='comment-link'>
                        <div id='border-div'>
                            <img src={comment.imageUrl} alt={comment.cocktailName} />
                            <div id='profile-comments'>
                                <h3 key={comment.id}>{`${comment.cocktailName}`}</h3>
                                <p key={comment}>{`${comment.content}`}</p>
                            </div>

                        </div>
                    </Link>
                </div>
            ))}
        </div>

    )
}

export default Profile;