import React, { Component } from "react";
import './TodoListItem.css';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            };
        });

        console.log(`${this.props.label} is done!`);
    };

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            };
        });
    };

    render() {

        const { label } = this.props;
        const { done, important } = this.state;

        let classNames = "TodoListItem";
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
                <span className={'TodoItemLabel'}
                      onClick={ this.onLabelClick } >
                    {label}
                </span>
                <span className={'TodoListButtons'}>
                    <button type={'button'}
                            className={'btn btn-outline-success btn-sm float-right'}
                            onClick={this.onMarkImportant}>
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