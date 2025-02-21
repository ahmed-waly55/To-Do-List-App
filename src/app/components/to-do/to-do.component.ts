import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

  title:string = "To Do List Application"

  tasks:string[] =[]
  newTask:string =""
  isAvalible:boolean = false;

  addTask(){
    if(this.newTask.trim() !== ''){
      this.tasks.push(this.newTask);
      this.newTask = ''
      this.isAvalible = true
    }
    console.log(this.tasks);
    
  }

  // editTask(index:number,newTaskEdit:string){
  //   let updatTask = prompt('Efit Task',this.tasks[index])
  //   if(updatTask !== null){
  //     this.tasks[index] = updatTask.trim()
  //   }
  // }  

  editTask(index:number,newTaskEdit:string):string | void{
    const trimedTask =newTaskEdit.trim();
    if(trimedTask !== ''){
      this.tasks[index] = trimedTask
    }
    else{
      newTaskEdit = this.tasks[index];
      return this.newTask = newTaskEdit;
    }
    this.newTask = ''
  }

  removeTask(index:number){
    this.tasks.splice(index,1)
    this.isAvalible = this.tasks.length > 0;
  }



}


