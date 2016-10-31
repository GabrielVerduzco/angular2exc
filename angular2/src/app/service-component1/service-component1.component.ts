import { Component, OnInit, Inject } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-service-component1',
  templateUrl: './service-component1.component.html',
  styleUrls: ['./service-component1.component.css']
})
export class ServiceComponent1Component implements OnInit {

  constructor(
      @Inject('loged') private loged
  ) { }

  logIt(){
    this.loged.log();
  }



  ngOnInit() {
  }

}
