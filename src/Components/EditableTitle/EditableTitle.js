import React, { useState } from 'react'

const EditableTitle = ({
    id,
    title,
    editTitle
}) => {

    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(title);

    const clickHandler = () => {
        setEditing(true);
    }

    const onKeyPress = (event) => {

        if (event.charCode === 13) {
            editTitle(id, event.target.value)
            setEditing(false);
        }
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    if (editing) {
        return (
            <div className='edit-textbox'>
                <label>Press Enter to Modify !!!</label>
                <input className="edit"
                    value={value}
                    onKeyPress={onKeyPress}
                    onChange={onChange} />

            </div>
        )
    } else {
        return <label onClick={clickHandler}>{title}</label>
    }
}

export default EditableTitle;