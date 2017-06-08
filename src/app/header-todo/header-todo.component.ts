import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header-todo',
  templateUrl: './header-todo.component.html',
  styleUrls: ['./header-todo.component.scss']
})
export class HeaderTodoComponent implements OnInit {

  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

}
