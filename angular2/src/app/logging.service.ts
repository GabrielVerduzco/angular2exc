import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  log(){
    console.log('Soy ell login service');
  }

}
