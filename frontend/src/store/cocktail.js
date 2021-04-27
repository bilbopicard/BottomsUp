const LOAD = 'cocktail/LOAD';

const load = (list) => ({
    type: LOAD,
    list
})

export const getCocktails = () => async (dispatch) => {
    const response = await fetch('/api/cocktails')

    if (response.ok) {
        const list = await response.json();
        // console.log(list)
        dispatch(load(list))
    }
}

// export const getOneCocktail = (id) => async (dispatch) => {
//     const response = await fetch(`/api/cocktails/${id}`)

//     if (response.ok) {
//         const cocktail = await response.json()

//         dispatch(cocktail)
//     }
// }

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
        case LOAD:
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