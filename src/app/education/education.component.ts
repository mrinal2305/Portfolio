import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  ln  = true;
  fb  = true;
  gb  = true;
  gm  = true;

  constructor() { }

  ngOnInit(): void {
  }

}
