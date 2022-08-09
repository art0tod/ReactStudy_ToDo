import React, { Component } from "react";
import './ItemAddForm.css'

export default class ItemAddForm extends Component {

  render() {
    return (
      <div className={'ItemAddForm'}>
        <button
          className={'btn btn-outline-secondary'}
          onClick={() => this.props.onItemAdded(`Новая задача`)}>
          Добавить задачу
        </button>
      </div>
    );
  };
};