import { Component, OnInit } from '@angular/core';
import { AssignmentComponent,Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
  
})
export class Assignment2Component implements OnInit {
 
  todoList : Todo[];
  selectedTodo:Todo;
  constructor(private todo: AssignmentComponent) {}

  ngOnInit() {
    this.todoList = this.todo.todos;
  }
  selectTodo(todo) {
    this.selectedTodo = todo;
  }
  }
