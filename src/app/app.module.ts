import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderTodoComponent } from './header-todo/header-todo.component';
import { FooterTodoComponent } from './footer-todo/footer-todo.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderTodoComponent,
    FooterTodoComponent,
    TodoViewComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
