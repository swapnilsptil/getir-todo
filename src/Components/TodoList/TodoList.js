import React, { useState } from 'react';
import { COMPLETED } from '../../utils/Const';
import { Todo } from '../index';
import './TodoList.scss';

const TodoList = ({
    todos,
    toggleTodo,
    deleteTodo,
    editTitle,
    toggleAll
}) => {

    const [value, setValue] = useState('');

    const isAllCompleted = () => (todos || []).every(item => item.status === COMPLETED);

    return (
        <section className="main">
            {
                todos.length > 0 &&
                <input className='search-textbox' type='search' onChange={(e) => setValue(e.target.value)} placeholder='Search Todo' />
            }
            <ul className='todo-list'>
                <li>
                    {
                        todos.length > 0 &&
                        <div className="view select-heading">
                            {
                                !isAllCompleted() ?
                                    <img onClick={toggleAll} alt="checkbox" src="https://img.icons8.com/office/16/000000/checked-checkbox--v2.png" />
                                    :
                                    <img onClick={toggleAll} alt="checkbox" src="https://img.icons8.com/office/16/000000/checked-checkbox--v1.png" />

                            }
                            <label>{`${!isAllCompleted() ? 'Check All' : 'Uncheck All'}`}</label>

                        </div>
                    }
                </li>
            </ul>
            {
                todos.length > 0 ? (
                    <ul className="todo-list">
                        {
                            todos.filter(item => item.title.toLowerCase().includes(value.toLowerCase())).map((todo, index) =>
                                <Todo key={`todo-${index}`} {...todo}
                                    editTitle={editTitle}
                                    toggleTodo={toggleTodo}
                                    deleteTodo={deleteTodo} />
                            )
                        }
                    </ul>
                )
                    : null
            }
        </section>
    )
}

export default TodoList;