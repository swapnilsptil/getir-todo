import React from 'react'
import {
    COMPLETED 
} from '../../utils/Const';

import { EditableTitle } from '../index';

const Todo = ({
    toggleTodo,
    deleteTodo,
    status,
    id,
    title,
    editTitle
}) => {

    const checkHandler = () => toggleTodo(id);

    const deleteHandler = () => deleteTodo(id);

    return (
        <li className={status === COMPLETED ? 'completed' : ''}>
            <div className="view">
                {/* <input 
                    className='toggle'
                    type="checkbox"
                    onChange={checkHandler}
                    checked={status === COMPLETED} 
                    /> */}
                {
                    status !== COMPLETED ?
                        <img onClick={checkHandler} alt="checkbox" src="https://img.icons8.com/office/16/000000/checked-checkbox--v2.png"/>
                    : 
                        <img onClick={checkHandler} alt="checkbox" src="https://img.icons8.com/office/16/000000/checked-checkbox--v1.png"/>

                }

                <EditableTitle id={id} title={title} editTitle={editTitle} />

                <button className="destroy" onClick={deleteHandler}></button>
            </div>
        </li>
    )
}

export default Todo;
