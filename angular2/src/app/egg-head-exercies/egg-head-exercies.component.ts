import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-egg-head-exercies',
  template: `
 
    <div>
        {{message}}
        <input #myInput type="text" [(ngModel)]="message"   />   
        <p>Aqui esta paco</p>
      <!--  <button (mouseover)="onClick($event, myInput.value)">Click me</button> -->
    </div>
  
  `,
  styleUrls: ['./egg-head-exercies.component.css']
})
export class EggHeadExerciesComponent implements OnInit {

  @Input() message;

  onClick(event, value){
      console.log(event);
      console.log(value);
  }

  constructor() {
   // ()evento y [] pushing values.
    //setInterval(()=> this.message = Math.random().toString(), 2000)

  }

  ngOnInit() {
  }

}
