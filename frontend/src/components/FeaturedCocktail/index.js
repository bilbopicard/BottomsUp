import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './FeaturedCocktail.css';

function FeaturedCocktail() {
    // const [cocktail, setCocktail] = useState('');
    // let randomNum1 = Math.floor(Math.random() * 8 + 1);
    // let randomNum2 = Math.floor(Math.random() * 8 + 9);
    // let randomNum3 = Math.floor(Math.random() * 8 + 18);
    const cocktail1 = useSelector(state => state.cocktails[12]);
    // const cocktail = cocktails[randomNum];
    const cocktail2 = useSelector(state => state.cocktails[7]);
    const cocktail3 = useSelector(state => state.cocktails[14]);
    // console.log(randomNum)

    // console.log(cocktail);

    return (
        <>
            <h1 id='featured-cocktail-title'>Featured Cocktails</h1>
            <div id='inner-feature-div'>

                <div className="featured-div">
                    <Link to={`/cocktails/${cocktail1?.id}`}>
                        <div className="img-div">
                            <h3>{cocktail1?.name}</h3>
                            <img src={cocktail1?.imageUrl} alt="" className='featured-cocktail-img' />
                        </div>
                    </Link>
                    <Link to={`/cocktails/${cocktail2?.id}`} >
                        <div className="img-div">
                            <h3>{cocktail2?.name}</h3>

                            <img src={cocktail2?.imageUrl} alt="" className='featured-cocktail-img' />
                        </div>
                    </Link>
                    <Link to={`/cocktails/${cocktail3?.id}`} >
                        <div className="img-div">
                            <h3>{cocktail3?.name}</h3>

                            <img src={cocktail3?.imageUrl} alt="" className='featured-cocktail-img' />
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default FeaturedCocktail;