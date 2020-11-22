import React, { useState, useEffect } from 'react';
import { difficultyLevels } from '../../index'

const SearchBar = ({ categories, handleOnChange }) => {

    const [searchConditions, setSearchConditions] = useState({
        categories: "none",
        difficulty: "none"
    })


    const sortValue = (event) => {
        setSearchConditions(
            {
                ...searchConditions,
                [event.target.name]: event.target.value
            }
        )
    }

    useEffect(() => {
        handleOnChange(searchConditions)
    }, [searchConditions])

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
                <select id="difficulty" name="difficulty" onChange={sortValue}>
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