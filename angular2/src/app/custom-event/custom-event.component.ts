import { Component, OnInit, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-event',
  template: `
               <div>
                    <div><input #contactname type="text" placeholder="Enter name" /></div>
                    <div><input #contacttele type="text" placeholder="Enter telephone" /></div>
                    <div><input #contactemail type="text" placeholder="Enter email" /></div>
                    <button (click)="handleClick(contactname.value, contacttele.value, contactemail.value)">Save</button>
                </div>
              `
})
export class CustomEventComponent implements OnInit {

  @Output() save: EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public handleClick(name: string, tele: string, email: string): void {
    this.save.next({name: name, telephone: tele, emailAddress: email});
  }

}
