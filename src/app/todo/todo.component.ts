import { Component } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent {

  constructor(private todoService: TodoService) {
  }

}
