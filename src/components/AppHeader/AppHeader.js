import React from "react";
import './AppHeader.css';

const AppHeader = ({todo, done}) => {
    return (
        <div className={'AppHeader d-flex'}>
            <h1>Список задач</h1>
            <h2>{todo} в процессе, {done} готово</h2>
        </div>
    );
};

export default AppHeader;