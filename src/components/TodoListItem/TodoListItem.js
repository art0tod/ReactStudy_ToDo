import React, { Component } from "react";
import './TodoListItem.css';

export default class TodoListItem extends Component {

    constructor() {
        super();
        this.onLabelClick = () => {
            console.log(`${this.props.label} is done!`);

        }
    }

    render() {

        const { label, important = false } = this.props;

        const style = {
            color: important ? 'tomato' : 'white',
            fontWeight: important ? 'bold' : 'normal'
        }

        return (
            <span className={'TodoListItem'}>
                <span className={'TodoItemLabel'}
                      style={style}
                      onClick={ this.onLabelClick } >
                    {label}
                </span>
                <span className={'TodoListButtons'}>
                    <button type={'button'}
                            className={'btn btn-outline-success btn-sm float-right'}>
                        <i className={'fa fa-exclamation'}/>
                    </button>

                    <button type={'button'}
                            className={'btn btn-outline-danger btn-sm float-right'}>
                        <i className={'fa fa-trash'}/>
                    </button>
                </span>
            </span>
        );
    };
}