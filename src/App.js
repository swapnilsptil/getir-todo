import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import './App.scss';

import {FilterPanel, Header, TodoList} from './Components';

import {
    addTodo, 
    toggleTodo, 
    deleteTodo, 
    changeFilter, 
    editTitle, 
    clearCompleted, 
    toggleAll,
} from './actions/todos';

import {
    ALL,
    ACTIVE,
    COMPLETED,
    DATABASE
} from './utils/Const';

const App = ({
    dispatch,
    todos,
    currentFilter
}) => {

    useEffect(() => {
        const localData = JSON.parse(window.localStorage.getItem(DATABASE) || '[]');
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => res.json())
        .then (res =>{
            res.forEach(item => {
                if(localData.length === 0 || localData?.todos?.findIndex(data => data.title === item.title) === -1){
                    const {title, completed} = item;
                    dispatch(addTodo(title, completed ? COMPLETED : ACTIVE));
                }
            })
        }
        )
        
    }, [dispatch]);

    const createTodoFn = (title) => dispatch(addTodo(title));

    const toggleTodoFn = (id) => dispatch(toggleTodo(id));

    const deleteTodoFn = (id) => dispatch(deleteTodo(id));

    const changeFilterFn = (filter) => dispatch(changeFilter(filter));

    const editTitleFn = (id, title) => dispatch(editTitle(id, title));

    const clearCompletedFn = () => dispatch(clearCompleted());

    const toggleAllFn = () => dispatch(toggleAll());

    const filteredTodo = [...todos].filter(todo =>
        currentFilter === ALL || todo.status === currentFilter
    )

    return (
        <div className="learn">
            <section className="todoapp">
                <Header addTodo={createTodoFn} />
                <FilterPanel count={filteredTodo.length}
                    clearCompleted={clearCompletedFn}
                    currentFilter={currentFilter}
                    changeFilter={changeFilterFn} 
                />
                
                <TodoList todos={filteredTodo}
                    editTitle={editTitleFn}
                    toggleTodo={toggleTodoFn}
                    deleteTodo={deleteTodoFn}
                    toggleAll={toggleAllFn} />

                
            </section>
        </div>
    )
}

export default connect(state => state)(App)
