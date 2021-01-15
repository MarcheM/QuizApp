import React, { useState, useEffect } from 'react';
import { difficultyLevels } from '../../../index'
import SortForm from '../../atoms/sortForm/SortForm'
import styles from './searchBar.module.css'

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
        <div className={styles.searchBar}>
            <SortForm array={categories} name="kategoria:" id="categories" sortFunction={sortValue} />
            <SortForm array={difficultyLevels} name="poziom trudności:" id="difficulty" sortFunction={sortValue} />
        </div>
    )
}

export default SearchBar;