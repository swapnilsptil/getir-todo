import React from 'react';

const Filter = ({
    changeFilter,
    selection,
    children,
    currentFilter
}) => {

    const filter = (event) => {
        event.preventDefault()
        changeFilter(selection)
    }

    const className = selection === currentFilter ? 'selected' : ''

    return (
        <a href="/#" onClick={filter} className={className}>
            {children}
        </a>
    )
}

export default Filter;