import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { findMatchingCocktails } from '../../store/cocktail';
import './SearchBar.css';

const SearchBar = ({ cocktails }) => {

    const dispatch = useDispatch();
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

    // useEffect(() => {
    //     if (inputVal.length > 0) {
    //         return dispatch(findMatchingCocktails(inputVal))

    //     }
    // }, [inputVal])

    return (
        <section >
            <div className="auto">
                <input
                    className='search-bar'
                    onChange={(e) => setInputVal(e.target.value)}
                    value={inputVal}
                    placeholder="Find a cocktail..."
                />

            </div>
        </section>
    );
}

export default SearchBar;