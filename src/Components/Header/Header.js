import React, { useState } from 'react';
import './Header.scss';

const Header = ({
    addTodo
}) => {

    const [value, setValue] = useState('');

    const onKeyPress = (event) => {
        if (event.charCode === 13) {
            addTodo(value)
            setValue('');
        }
    }

    const onChange = (event) => {
        const { target: { value } } = event;
        setValue(value);
    }

    return (
        <header>
            <h1>ToDo - Getir</h1>
            <input className="new-todo"
                placeholder="Add todo item ?"
                value={value}
                onKeyPress={onKeyPress}
                onChange={onChange} />
        </header>
    )
}

export default Header;
