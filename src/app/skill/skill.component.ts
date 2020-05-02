import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  html = true;
  c = true;
  js = true;
  css = true;
  electron = true;
  angular = true;
  react = true;
  node = true;
  jquery = true;
  bootstrap = true;
  mongo = true;
  sql = true;
  firebase = true;
  figma = true;
  github = true;
  algo   = true;
  radi = "38";
 
  constructor() { }

  ngOnInit(): void {

  }

}
