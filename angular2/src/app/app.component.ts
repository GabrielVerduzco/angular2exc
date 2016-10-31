import {Component, Inject} from '@angular/core';
import {MailService} from "./mail.service";
import {inject} from "@angular/core/testing";

@Component({
  selector: 'app-root', //this is the selector 'instroction'
  templateUrl: `
    <h1>Hola</h1>
    <fa-other></fa-other>
    <fa-another>
        <div>
            <h1>Que onda!</h1>
            <p>Mundo</p>
        </div> 
    </fa-another>
    <fa-another>
        <p>Op</p>
    </fa-another>  
    <app-user-item></app-user-item>
    <ul>
        <app-egg-head-exercies 
        *ngFor="let message of mail.messages" 
        [message]="message"
        >
       
        </app-egg-head-exercies>
        
    </ul>
    <hr>
    <app-custom-event (save)="saveContact($event)"></app-custom-event>
    <hr>
    <app-directive></app-directive>
    <hr>
    <app-service-component1></app-service-component1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  saveContact(contact){
    console.log(contact);
  }
  constructor(
      @Inject('mail') private mail





  ) {}


}
