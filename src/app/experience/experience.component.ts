import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  mongo = true;
  intern = true;
  market = true;
  
  high = {
    'opacity' : '1'
  };
  low = {
    'opacity' : '0.4'
  }
  constructor() { }
  overmongo(){
    this.intern = false;
    this.market = false;
  }
  outmongo(){
    this.intern = true;
    this.market = true;
  }
  overintern(){
    this.mongo = false;
    this.market = false;
  }
  outintern(){
    this.mongo = true;
    this.market = true;
  }
  overmarket(){
    this.intern = false;
    this.mongo = false;
  }
  outmarket(){
    this.intern = true;
    this.mongo = true;
  }
  ngOnInit(): void {
  }

}
