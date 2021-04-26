import './Cocktail.css';

export default function Cocktail({ cocktail }) {
    return (
        <div className="cocktail-div">
            <h2>{cocktail.name}</h2>
            <p>{cocktail.spirit}</p>
        </div>
    )
}