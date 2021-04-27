import { useState } from 'react';
import './Cocktail.css';

export default function Cocktail({ cocktail }) {
    // const [isShown, setIsShown] = useState(false);

    //     onMouseEnter = {() => setIsShown(true)}
    //  onMouseLeave = {() => setIsShown(false)}
    return (
        <div className="outer-cocktail-div" >
            <h2>{cocktail.name}</h2>
            <img src={`${cocktail.imageUrl}`} alt={`${cocktail.name}`} />
            {/* {cocktail.recipe.split(',').map(step => (
                    <p>{step}</p>
                ))}
                <p>{cocktail.description}</p> */}
        </div>
    )
}