import React, { Component } from "react";
import './SearchPanel.css';

export default class SearchPanel extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = (e) => {
        const searchText = e.target.value;
        this.setState({searchText});
        this.props.onSearchChange(searchText);
    };

    render() {
        return (
            <input
              type={'text'}
              className={'form-control search-input'}
              placeholder={'Поиск'}
              value={this.state.searchText}
              onChange={this.onSearchChange}/>
        );
    };
};