import React from 'react';
import {Filter} from '../index';
import './FilterPanel.scss';

import {
    ALL,
    ACTIVE,
    COMPLETED 
} from '../../utils/Const';

const FilterPanel = ({
    count,
    currentFilter,
    changeFilter,
    clearCompleted
}) => {

    return (
        <div className="filter-panel">
            <ul className="filters">
                <li>
                    <Filter 
                        currentFilter={currentFilter}
                        changeFilter={changeFilter}
                        selection={ALL}
                    >
                        All
                    </Filter>
                </li>
                <li>
                    <Filter 
                        currentFilter={currentFilter}
                        changeFilter={changeFilter}
                        selection={ACTIVE}
                    >
                        Active
                    </Filter>
                </li>
                <li>
                    <Filter 
                        currentFilter={currentFilter}
                        changeFilter={changeFilter}
                        selection={COMPLETED}
                        >
                        Completed
                </Filter>
                </li>
            </ul>
            <span className="todo-count">
                <strong>{`${count} `}</strong>
                <span>items left</span>
            </span>
            <button 
                className="clear-completed"
                onClick={clearCompleted}
            >
                    Clear completed
            </button>
        </div>
    )
}

export default FilterPanel;