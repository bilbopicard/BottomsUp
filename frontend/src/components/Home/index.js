import { useSelector, useDispatch } from 'react-redux';
import { getCocktails } from '../../store/cocktail';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cocktail from '../Cocktail';
import FeaturedCocktail from '../FeaturedCocktail';
import './Home.css';

export default function Homepage() {

    const [search, setSearch] = useState('')
    const [filteredCocktails, setFilteredCocktails] = useState([]);

    const cocktails = useSelector(state => {
        return state.cocktails.list.map(cocktailId => state.cocktails[cocktailId]);
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])

    useEffect(() => {
        setFilteredCocktails(cocktails.filter(cocktail => {
            // console.log(cocktail)
            return cocktail.name.toLowerCase().includes(search.toLowerCase())
        })
        )
    }, [search])

    return (
        <div id="home-container">
            <div id="featured-cocktail-container">
                <h2>I'm a featured cocktail</h2>
                {/* <FeaturedCocktail /> */}
            </div>
            <div className="cocktail-search-container">
                <h1>Cocktails</h1>
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
            </div>

        </div>

    )
}