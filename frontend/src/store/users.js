import { csrfFetch } from './csrf';

const GET_USERS = 'users/GET_USERS';

const load = (users) => ({
    type: GET_USERS,
    users
})

export const getUsers = () => async (dispatch) => {
    // console.log('GET USERS STORE')
    const response = await csrfFetch('/api/users');
    // console.log(response.ok);
    if (response.ok) {
        const users = await response.json();
        dispatch(load(users));
    }
}

const sortUsers = list => {
    return list
        // .sort((cocktailA, cocktailB) => {
        //     return cocktailA.no - cocktailsB.no;
        // })
        .map(user => user.id);
};

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS:
            const allUsers = {};
            action.users.forEach(user => {
                allUsers[user.id] = user;
            })
            return {
                ...state,
                ...allUsers,
                users: sortUsers(action.users)
            }
        default:
            return state;
    }
}

export default userReducer;