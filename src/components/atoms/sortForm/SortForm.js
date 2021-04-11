import React from 'react';

const SortForm = ({ array, name, id, sortFunction }) => {
    return (
        <form>
            <label htmlFor={id}>{name}</label>
            <select id={id} name={id} onChange={sortFunction}>
                <option value={"none"}>Wybierz</option>
                {array.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })
                }
            </select>
        </form>
    );
}

export default SortForm;