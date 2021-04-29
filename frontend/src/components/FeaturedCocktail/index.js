import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './FeaturedCocktail.css';

function FeaturedCocktail() {
    // const [cocktail, setCocktail] = useState('');
    let randomNum = Math.floor(Math.random() * 18 + 1);
    const cocktail = useSelector(state => state.cocktails[randomNum]);
    // const cocktail = cocktails[randomNum];
    // console.log(randomNum)

    // console.log(cocktail);

    return (
        <div>
            <h1>Featured Cocktail</h1>
            <h2>{cocktail?.name}</h2>
            <div className="featured-div">
                <img src={cocktail?.imageUrl} alt="" className='featured-cocktail-img' />
                <div className='feature-steps'>
                    {cocktail?.recipe.split(',').map(step => (
                        <p className='cocktail-info' key={step}>{step}</p>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default FeaturedCocktail;