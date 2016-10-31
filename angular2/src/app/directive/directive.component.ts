import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  classes = {'blue': true, 'red': false, 'underline': true}
  test=true;
  constructor() { }

  ngOnInit() {
  }

}
