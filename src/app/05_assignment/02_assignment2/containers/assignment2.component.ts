import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AssignmentComponent } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Assignment2Component implements OnInit {
 
  constructor(private todo: AssignmentComponent) {}

  ngOnInit() {
    this.getTodos();
  }
  /**
   * get all todos existing in assignment.component.ts
   */
  getTodos() {
    var body: HTMLElement = document.getElementById('tbody')! as HTMLElement;

    var todoList = this.todo.todos;
    for (let eachTodo of todoList) {
      let row = this.createRow(eachTodo);
      body.appendChild(row);
    }
  }
  /**
   * create HTMLTableRow element for each todo
   * @param todo
   */
  createRow(todo: {
    id: string;
    type: string;
    description: string;
    completed: boolean;
  }): HTMLTableRowElement {
    // a row of todo
    let tr: HTMLTableRowElement = document.createElement('tr');
    tr.addEventListener('click', () => {
      tr.className = 'active';
    });

    //data cell of todo
    let id: HTMLTableCellElement = document.createElement('td');
    id.textContent = todo.id;
    let type: HTMLTableCellElement = document.createElement('td');
    type.textContent = todo.type;
    let description: HTMLTableCellElement = document.createElement('td');
    description.textContent = todo.description;
    let completed: HTMLTableCellElement = document.createElement('td');
    completed.textContent = todo.completed.toString();

    //append all the data cells into the row of todo.
    tr.appendChild(id);
    tr.appendChild(type);
    tr.appendChild(description);
    tr.appendChild(completed);
    return tr;
  }
}
