import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages  = [
      `Nombre`,
      `Edad`,
      `Estudio `
  ];

  constructor() { }

}
