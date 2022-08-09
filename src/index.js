import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import ItemStatusFilter from "./components/ItemStatusFilter";

import './index.css';

const App = () => {

    const todoData = [
        { label: 'Выучить JS', important: true, id: 'ef' },
        { label: 'Сделать кофе', important: false, id: 'cj' },
        { label: 'Выучить React', important: false, id: 'cj' },
        { label: 'Создать крутое приложение!!!', important: true, id: 'zr' }
    ];

    return (
        <div className={'todo-app'}>
            <AppHeader todo={1} done={4}/>
            <div className={'todo-panel d-flex'}>
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    )
};

ReactDOM.render(<App />,
    document.getElementById('root'));