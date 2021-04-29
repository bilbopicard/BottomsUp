import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cocktail from '../Cocktail';

function Search() {

    const [search, setSearch] = useState('')
    const [filteredCocktails, setFilteredCocktails] = useState([]);

    const cocktails = useSelector(state => {
        return state.cocktails.list.map(cocktailId => state.cocktails[cocktailId]);
    })

    useEffect(() => {
        setFilteredCocktails(cocktails.filter(cocktail => {
            return cocktail.name.toLowerCase().includes(search.toLowerCase())
        })
        )
    }, [search])
    return (
        <>
            <div className="search-div">
                <input type="text" placeholder="Find a cocktail..." onChange={(e) => setSearch(e.target.value)} className='cocktail-search' />

            </div>
            <ul>
                {filteredCocktails.length ? filteredCocktails.map(cocktail => (
                    <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`} className='cocktail-link'><Cocktail cocktail={cocktail} /></Link> </li>
                )) : cocktails.map(cocktail => (
                    <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`} className='cocktail-link'><Cocktail cocktail={cocktail} /></Link> </li>
                ))}
            </ul>
        </>
    )
}

export default Search;