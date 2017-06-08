import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-footer-todo',
  templateUrl: './footer-todo.component.html',
  styleUrls: ['./footer-todo.component.scss']
})
export class FooterTodoComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  clearCompleted() {
    this.todoService.deleteCompleted();
  }

  get footerTodo() {
    return this.todoService.getAllTodos();
  }
}
