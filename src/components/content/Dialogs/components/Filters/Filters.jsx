import React from 'react'
import filters from './filters.module.css'
import Filter from './Filter/Filter'

const Filters = () => {
    return (
        <div className={filters.container}>
            <div className={filters.title}>Фильтры</div>
            <Filter />
        </div>
    )
}

export default Filters;