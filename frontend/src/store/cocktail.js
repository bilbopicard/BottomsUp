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
        console.log('inside get cocktails', list)
        // console.log(list)
        dispatch(load(list))
    }
}
export const addComment = (comment) => async (dispatch) => {
    // console.log('inside add comment', comment);
    const response = await csrfFetch('/api/cocktails/comments', {
        method: 'POST',
        body: JSON.stringify(comment)
    });
}

export const findMatchingCocktails = (input) => async (dispatch) => {
    const response = await fetch('/api/cocktails/')

    if (response.ok) {
        const list = await response.json();

        const matches = list.map(cocktail => {
            return cocktail.name.includes(input)
        })

        dispatch(load(matches))
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
                ...allCocktails,
                ...state,
                list: sortList(action.list)
            }
        default:
            return state;
    }
}

export default cocktailReducer;