import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
text: String= "";
day: String = "";
remainder: boolean = false;
showAddTask : boolean =false;
subscription:Subscription;
@Output() onAddTask: EventEmitter<Task> = new EventEmitter();
constructor(private uiService: UiService) {
  this.subscription = this.uiService.onToggle().subscribe(show=>{
    this.showAddTask =!show;
    console.log(" add task component show :> "+show);
  });
 }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Enter Text before Save task !");
      return;
    }
    const newTask:any ={
      text : this.text,
      day: this.day,
      remainder: this.remainder
    }
    this.onAddTask.emit(newTask);
    this.text = "";
    this.day = "";
    this.remainder = false;

  }
}
