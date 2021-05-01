import { csrfFetch } from './csrf';

const POPULATE = 'cocktail/POPULATE';

const load = (list) => ({
    type: POPULATE,
    list
})


export const getCocktails = () => async (dispatch) => {
    const response = await csrfFetch('/api/cocktails')

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}

export const deleteComment = (commentObj) => async (dispatch) => {
    const { id } = commentObj;
    // console.log('in delete comment', id);

    const response = await csrfFetch(`/api/cocktails/comments/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        console.log('in delete comment and deleted')
        dispatch(getCocktails());
    }
}

export const addComment = (comment) => async (dispatch) => {
    // console.log('inside add comment', comment);
    const response = await csrfFetch('/api/cocktails/comments', {
        method: 'POST',
        body: JSON.stringify(comment)
    });
    if (response.ok) {
        dispatch(getCocktails());
    }

}

export const getOneCocktail = (id) => async (dispatch) => {
    const response = await fetch(`/api/cocktails/${id}`)

    if (response.ok) {
        const cocktail = await response.json()

        dispatch(cocktail)
    }
}

const initialState = {
    list: [],
}

const sortList = list => {
    return list
        // .sort((cocktailA, cocktailB) => {
        //     return cocktailA.no - cocktailsB.no;
        // })
        .map(pokemon => pokemon.id);
};

const cocktailReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULATE:
            const allCocktails = {};
            action.list.forEach(cocktail => {
                allCocktails[cocktail.id] = cocktail;
            })
            return {
                ...state,
                ...allCocktails,
                list: sortList(action.list)
            }
        default:
            return state;
    }
}

export default cocktailReducer;