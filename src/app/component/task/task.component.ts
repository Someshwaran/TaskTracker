import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskServices: TaskService) { }

  ngOnInit(): void {
  this.taskServices.getTasks().subscribe((tasks)=>{
    this.tasks = tasks;
  });
  }
  deleteTask(task: Task){
    this.taskServices.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter(t=> t.id !== task.id);
    });
  }
  toggleRemainder(task: Task){
    task.remainder = !task.remainder;
    console.log("remainder "+task.remainder);
    this.taskServices.updateTaskRemainder(task).subscribe();
  }

  addTask(task:Task){
    this.taskServices.addTask(task).subscribe((task)=>{
      this.tasks.push(task);
    });
  }
}
