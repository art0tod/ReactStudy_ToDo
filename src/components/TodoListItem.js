import React from "react";
import './TodoListItem.css';

const TodoListItem = ( { label, important = false } ) => {

    const style = {
        color: important ? 'tomato' : 'white',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (
        <span className={'TodoListItem'}>
            <span className={'TodoItemLabel'}
                  style={style}>
                { label }
            </span>
            <span className={'TodoListButtons'}>
                <button type={'button'}
                        className={'btn btn-outline-success btn-sm float-right'}>
                    <i className={'fa fa-exclamation'} />
                </button>

                <button type={'button'}
                        className={'btn btn-outline-danger btn-sm float-right'}>
                    <i className={'fa fa-trash'} />
                </button>
            </span>
        </span>
    );
};

export default TodoListItem;