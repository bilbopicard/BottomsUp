import { useSelector } from 'react-redux';
import './FeaturedCocktail.css';

function FeaturedCocktail() {
    let randomNum = Math.floor(Math.random() * 18 + 1);
    console.log(randomNum)
    const cocktail = useSelector(state => state.cocktails[randomNum])
    console.log(cocktail);
    return (
        <div>
            <h1>I'm a featured cocktail</h1>
            <h2>{cocktail?.name}</h2>
            <div className="featured-div">
                <img src={cocktail?.imageUrl} alt="" className='featured-cocktail-img' />
                <div>
                    {cocktail?.recipe.split(',').map(step => (
                        <p className='cocktail-info'>{step}</p>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default FeaturedCocktail;