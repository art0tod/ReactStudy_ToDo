import React, { Component } from "react";
import './ItemAddForm.css'

export default class ItemAddForm extends Component {

  state = {
    label: '',
    itemDate: new Date().toLocaleString()
  };

  onLabelChange = (e) => {
    console.log(`label: ${e.target.value}`)
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      itemDate: new Date().toLocaleString()
    });

    if (this.state.label !== '') {
      this.props.onItemAdded(this.state.label, this.state.itemDate);
      this.setState({
          label: '',
        }
      );
    }
  };

  render() {
    return (
      <form className={'ItemAddForm d-flex'}
            onSubmit={this.onSubmit}>

        <input type={'text'}
               className={'form-control'}
               onChange={this.onLabelChange}
               placeholder={'Название задачи'}
               value={this.state.label} />
        <button
          className={'btn btn-outline-secondary'}>
          Добавить
        </button>
      </form>
    );
  };
};
