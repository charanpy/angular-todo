import { TodoService } from './../../service/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import {v4 as uuid} from "uuid";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle: string =""
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  handleAdd = () => {
    const newTodo:Todo = {
      id: uuid(),
      title: this.todoTitle,
      date: new Date(),
      isComplete: false
    }
    this.todoService.addTodo(newTodo);
    this.todoTitle=""
  }
}
