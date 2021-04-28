import { useState } from 'react';
import './Cocktail.css';

export default function Cocktail({ cocktail }) {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <div
            className={hovered ? 'hovered outer-cocktail-div' : 'outer-cocktail-div'}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <h2 className="cocktail-name">{cocktail.name}</h2>
            {cocktail.recipe.split(',').map(step => (
                <p>{step}</p>
            ))}
        </div>
    )
}