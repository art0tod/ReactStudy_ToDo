import React from "react";

import AppHeader from "../AppHeader/";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter/";

import './App.css';

const App = () => {

    const todoData = [
        { label: 'Выучить JS', important: true, id: 'ef' },
        { label: 'Сделать кофе', important: false, id: 'cj' },
        { label: 'Выучить React', important: false, id: 'cj' },
        { label: 'Создать крутое приложение!!!', important: true, id: 'zr' }
    ];

    return (
        <div className={'todo-app'}>
            <AppHeader todo={4} done={0}/>
            <div className={'todo-panel d-flex'}>
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    )
};

export default App;