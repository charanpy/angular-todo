import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        id: '11',
        title: 'Learn C',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '12',
        title: 'Learn Angular',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '13',
        title: 'Learn C++',
        isComplete: false,
        date: new Date(),
      },
    ];
  }

  getTodos = () => {
    return of(this.todos);
  };

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  };

  changeStatus = (todo: Todo) => {
    this.todos.map((item) => {
      if (item.id === todo.id) {
        todo.isComplete = !todo.isComplete;
      }
    });
  };

  deleteTodo = (todo: Todo) => {
    const indexOfTodo = this.todos.findIndex((item) => item.id === todo.id);
    this.todos.splice(indexOfTodo, 1);
  };
}
