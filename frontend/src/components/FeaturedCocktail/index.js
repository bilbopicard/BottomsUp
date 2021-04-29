import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './FeaturedCocktail.css';

function FeaturedCocktail() {
    // const [cocktail, setCocktail] = useState('');
    let randomNum1 = Math.floor(Math.random() * 6 + 1);
    let randomNum2 = Math.floor(Math.random() * 6 + 7);
    let randomNum3 = Math.floor(Math.random() * 6 + 13);
    const cocktail1 = useSelector(state => state.cocktails[randomNum1]);
    // const cocktail = cocktails[randomNum];
    const cocktail2 = useSelector(state => state.cocktails[randomNum2]);
    const cocktail3 = useSelector(state => state.cocktails[randomNum3]);
    // console.log(randomNum)

    // console.log(cocktail);

    return (
        <div>
            <h1 id='featured-cocktail-title'>Featured Cocktails</h1>
            <div className="featured-div">
                <Link to={`/cocktails/${cocktail1?.id}`}>
                    <div className="img-div">
                        <h4>{cocktail1?.name}</h4>
                        <img src={cocktail1?.imageUrl} alt="" className='featured-cocktail-img' />
                    </div>
                </Link>
                <Link to={`/cocktails/${cocktail2?.id}`} >
                    <div className="img-div">
                        <h4>{cocktail2?.name}</h4>

                        <img src={cocktail2?.imageUrl} alt="" className='featured-cocktail-img' />
                    </div>
                </Link>
                <Link to={`/cocktails/${cocktail3?.id}`} >
                    <div className="img-div">
                        <h4>{cocktail3?.name}</h4>

                        <img src={cocktail3?.imageUrl} alt="" className='featured-cocktail-img' />
                    </div>
                </Link>
                {/* <div className='feature-steps'>
                    {cocktail?.recipe.split(',').map(step => (
                        <p className='cocktail-info' key={step}>{step}</p>
                    ))}
                </div> */}
            </div>

        </div>
    )
}

export default FeaturedCocktail;