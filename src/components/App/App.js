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
      this.createTodoItem('Первая задача'),
      this.createTodoItem('Выучить React'),
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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

    const newItem = this.createTodoItem(text);

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

  onToggleDone = (id) => {
    console.log(id)
    // this.setState(({todoData}) => {
    //
    // });
  };

  onToggleImportant = (id) => {
    console.log(id)
  }

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
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    )
  }
};
