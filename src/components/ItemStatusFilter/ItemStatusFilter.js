import React, { Component } from "react";
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {


    render() {
        return (
            <div className={'btn-group'}>
                <button type={'button'}
                        className={'btn btn-info'}>Все
                </button>
                <button type={'button'}
                        className={'btn btn-outline-secondary'}>Активно
                </button>
                <button type={'button'}
                        className={'btn btn-outline-secondary'}>Сделано
                </button>
            </div>
        );
    };
};