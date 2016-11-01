import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-imagen',
  templateUrl: './login-imagen.component.html',
  styleUrls: ['./login-imagen.component.css']
})
export class LoginImagenComponent implements OnInit {


  @Input() urlEscudo: string;

  constructor() { }

  testeo() {
    console.log(this.urlEscudo);
  }

  ngOnInit() {
  }

}
