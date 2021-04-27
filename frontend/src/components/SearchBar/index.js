import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './SearchBar.css';

const SearchBar = ({ cocktails }) => {

    const [inputVal, setInputVal] = useState('');

    const matches = () => {

        const inputLength = inputVal.length;
        const matches = [];


        if (inputLength === 0) return cocktails;

        cocktails.forEach(cocktail => {
            const nameSegment = cocktail.name.slice(0, inputLength);
            if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
                matches.push(cocktail);
            }
        });
        if (matches.length === 0) matches.push('No matches');

        return matches;
    }

    const results = matches().map((result) => result.name);
    // console.log(results)
    return (
        <section >
            <div className="auto">
                <input
                    className='search-bar'
                    onChange={(e) => setInputVal(e.target.value)}
                    value={inputVal}
                    placeholder="Find a cocktail..."
                />
                {inputVal.length > 0 && <ul className="auto-dropdown" onClick={(e) => setInputVal(e.target.val)}>
                    {results.map(result => (
                        <p>{result}{"\n"}</p>
                    ))}
                </ul>}
            </div>
        </section>
    );
}

export default SearchBar;