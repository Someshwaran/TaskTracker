import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() name: string ="";
@Input() color: string="";
@Output() btnClick =  new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("Add >");
    this.btnClick.emit();
  }
}
