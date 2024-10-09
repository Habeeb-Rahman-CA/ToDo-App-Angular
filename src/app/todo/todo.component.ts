import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  todos: Todo[] = []
  newTodoInput: string = ''

  // adding Todo
  addTodo() {
    if (this.newTodoInput.trim()) {
      const newTodo: Todo = {
        title: this.newTodoInput,
        completed: false
      }
      this.todos.push(newTodo)
      this.newTodoInput = ''
    }
  }

  //deleting Todo
  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }

  //toggle Todo
  toggleStatus(index: number) {
    this.todos = this.todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo)
  }
}