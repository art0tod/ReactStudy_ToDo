import React, {Component} from "react";

import AppHeader from "../AppHeader/";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter/";
import ItemAddForm from "../ItemAddForm";

import './App.css';

export default class App extends Component {

  //--------
  maxId = 10;
  //--------

  state = {
    todoData: [
      {label: 'Выучить JS', important: true, id: 'ef'},
      {label: 'Сделать кофе', important: false, id: 'cj'},
      {label: 'Выучить React', important: false, id: 'pj'},
      {label: 'Создать крутое приложение!!!', important: true, id: 'zr'}
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {

      const index = todoData.findIndex((el) => el.id === id)
      console.log(`Deleted list item with id: "${id}" and index: "${index}"`)

      const newArr = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ]

      return {
        todoData: newArr
      };
    });
  };

  addItem = (text) => {
    console.log(`Added: ${text}`)

    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };

  render() {
    return (
      <div className={'todo-app'}>
        <AppHeader todo={4} done={0}/>
        <div className={'todo-panel d-flex'}>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}/>
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    )
  }
};
