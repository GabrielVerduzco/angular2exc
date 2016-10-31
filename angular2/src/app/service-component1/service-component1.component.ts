import { Component, OnInit, Inject } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-service-component1',
  templateUrl: './service-component1.component.html',
  styleUrls: ['./service-component1.component.css']
})
export class ServiceComponent1Component implements OnInit {

  constructor(
    private logged: LoggingService
  ) { }

  logIt(){
    this.logged.log();
  }



  ngOnInit() {
  }

}
