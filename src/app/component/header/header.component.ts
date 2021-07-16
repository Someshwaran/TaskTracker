import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title: string = "Task Tracker";
showAddTask: boolean= true;
subscription: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(show=>{
      this.showAddTask = show;
      console.log(" header component show :> "+show);
    });
   }

  ngOnInit(): void {
  }
  toggleAddButton(){
    console.log("Toggle button\n");
    this.uiService.toggleAddTask();
  }
}
