//Directive very important ,in this we use ngClass directive which is class binding
import { Component,AfterViewInit } from '@angular/core';  
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  currentActive = 0;


  constructor() { }

  click(e){
    this.currentActive = e.target.id;
  }

  ngAfterViewInit() {
   
  }

}