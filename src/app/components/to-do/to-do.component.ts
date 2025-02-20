import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

  title:string = "To Do List Application"

  tasks:string[] =[]
  newTask:string =""
  
}
