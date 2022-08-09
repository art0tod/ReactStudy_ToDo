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

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  }

  render() {

    const { todoData } = this.state;
    const doneCount = this.state.todoData
      .filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
      <div className={'todo-app'}>
        <AppHeader todo={todoCount} done={doneCount}/>
        <div className={'todo-panel d-flex'}>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    )
  }
};
