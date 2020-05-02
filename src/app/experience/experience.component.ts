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
  default = "./../../assets/empty.jpg";
  images = {
    mongo : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/certi%2Funiversity-mongodb-com-1024x768desktop-b4b4cf.jpg?alt=media&token=90228023-abaf-42f3-aeba-3afbd2a6f65e",
    udacity : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/certi%2FBertelsmen.jpg?alt=media&token=8c838a14-e7b5-46bd-a0ae-9130303d6a79",
    intern   : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/certi%2Fdownload.png?alt=media&token=97c2f81c-50b8-4383-a47a-71b1199bb1f2"
  }

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
