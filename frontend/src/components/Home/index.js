import { useSelector, useDispatch } from 'react-redux';
import { getCocktails } from '../../store/cocktail';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cocktail from '../Cocktail';
import './Home.css';

export default function Homepage() {

    const [search, setSearch] = useState('')
    const [filteredCocktails, setFilteredCocktails] = useState([]);

    const cocktails = useSelector(state => {
        return state.cocktails.list.map(cocktailId => state.cocktails[cocktailId]);
    })

    // useEffect(() => {
    //     setFilteredCocktails(cocktails.filter(cocktail => {
    //         // console.log(cocktail)
    //         return cocktail.name.toLowerCase().includes(search.toLowerCase())
    //     })
    //     )
    // }, [search, cocktails])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])


    return (
        <div className="homepage-container">
            <h1>Cocktails Homepage</h1>
            <div className="search-div">
                <input type="text" placeholder="Find a cocktail..." onChange={(e) => setSearch(e.target.value)} className='cocktail-search' />

            </div>
            <ul>
                {cocktails.map(cocktail => (
                    <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`} className='cocktail-link'><Cocktail cocktail={cocktail} /></Link> </li>
                ))}
            </ul>
        </div>

    )
}