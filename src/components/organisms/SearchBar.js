import React from 'react';
import { difficultyLevels } from '../../index'

const SearchBar = ({ categories, handleOnChange }) => {

    const sortValue = (event) => {
        console.log(event.target.value)
        handleOnChange(event.target.value)
    }
    return (
        <div>
            <form>
                <label for="categories">kategoria:</label>
                <select id="categories" name="categories" onChange={sortValue}>
                    <option value={"none"}>Wybierz</option>
                    {categories.map((category, index) => {
                        return <option key={index} value={category}>{category}</option>
                    })
                    }
                </select>
            </form>
            <form>
                <label for="difficulty">poziom trudności:</label>
                <select id="difficulty" name="difficulty">
                    <option value={"none"}>Wybierz</option>
                    {difficultyLevels.map((diffLevel, index) => {
                        return <option key={index} value={diffLevel}>{diffLevel}</option>
                    })
                    }
                </select>
            </form>

        </div>
    )
}

export default SearchBar;