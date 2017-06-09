import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  lastId = 0;   // flag for increment the lists number
  todos: Todo[] = [];

  constructor() {
  }

  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    if (todo.title !== '') {
      this.todos.push(todo);
    }
    return this;
  }

  deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  deleteCompleted() {
    this.todos = this.todos.filter(todo => todo.complete === false);
  }

}
