import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './FeaturedCocktail.css';

function FeaturedCocktail() {
    const cocktail1 = useSelector(state => state.cocktails[12]);
    const cocktail2 = useSelector(state => state.cocktails[7]);
    const cocktail3 = useSelector(state => state.cocktails[27]);

    return (
        <>
            <h1 id='featured-cocktail-title'>Featured Cocktails</h1>
            <div id='inner-feature-div'>

                <div className="featured-div">
                    <Link to={`/cocktails/${cocktail1?.id}`}>
                        <div className="img-div">
                            <h2>{cocktail1?.name}</h2>
                            <img src={cocktail1?.imageUrl} alt="" className='featured-cocktail-img' />
                        </div>
                    </Link>
                    <Link to={`/cocktails/${cocktail2?.id}`} >
                        <div className="img-div">
                            <h2>{cocktail2?.name}</h2>

                            <img src={cocktail2?.imageUrl} alt="" className='featured-cocktail-img' />
                        </div>
                    </Link>
                    <Link to={`/cocktails/${cocktail3?.id}`} >
                        <div className="img-div">
                            <h2>{cocktail3?.name}</h2>

                            <img src={cocktail3?.imageUrl} alt="" className='featured-cocktail-img' />
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default FeaturedCocktail;