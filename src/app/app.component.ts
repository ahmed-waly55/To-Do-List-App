import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ToDoComponent } from "./components/to-do/to-do.component";



@Component({
  selector: 'app-root',
  imports: [MatButtonModule, ToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}
