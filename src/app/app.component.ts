import { Component, HostListener, Inject, AfterViewInit, ViewChild, ElementRef} from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(900)]),
    ]
)]
})
// Add a div of height 5% after each for best scrolling effect
export class AppComponent implements AfterViewInit {
  currentActive = 0;
  homeoffset : any = null;
  eduoffset  : any = null;
  skilloffset : any = null;
  projectoffset : any = null;
  experienceoffset : any = null;
  contactoffset : any = null;
  navbarOffset : any = null;
  show = false;
  @ViewChild('home') homeElement : ElementRef;
  @ViewChild('edu')  eduElement  : ElementRef;
  @ViewChild('skill')  skillElement  : ElementRef;
  @ViewChild('project')  projectElement  : ElementRef;
  @ViewChild('experience')  experienceElement  : ElementRef;
  @ViewChild('contact')  contactElement  : ElementRef;
  @ViewChild('navbar')  navbarElement  : ElementRef;

  constructor(@Inject(DOCUMENT) document) { }

  click(e){
    this.currentActive = e.target.id;
  }

  ngAfterViewInit() { 
    this.homeoffset = this.homeElement.nativeElement.offsetTop;
    this.eduoffset  = this.eduElement.nativeElement.offsetTop;
    this.skilloffset  = this.skillElement.nativeElement.offsetTop;
    this.projectoffset  = this.projectElement.nativeElement.offsetTop;
    this.experienceoffset  = this.experienceElement.nativeElement.offsetTop;
    this.navbarOffset  = this.navbarElement.nativeElement.offsetTop;
   }

   
  @HostListener('window:scroll', ['$event'])
  // Code for sticky navbar -----------  VVI
  onWindowScroll(e) {
    let offset = window.pageYOffset; 
    // console.log(offset);
     if (window.pageYOffset >= window.outerHeight ) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
       document.getElementById('hamburger').classList.add('sticky-hamburger');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
        document.getElementById('hamburger').classList.remove('sticky-hamburger');
     }

    
    // Code for highlight menu item on scroll --------------- VVI
     if(offset >= this.homeoffset-90 && offset < this.eduoffset-90) this.currentActive = 6
     else if(offset >= this.eduoffset-90 && offset < this.skilloffset-90) this.currentActive = 1
     else if(offset >= this.skilloffset-90 && offset < this.projectoffset-90) this.currentActive = 2
     else if(offset >= this.projectoffset-90 && offset < this.experienceoffset-90) this.currentActive = 3
     else  this.currentActive = 4;
  }

  // @HostListener('window:scroll', ['$event'])
  // checkoffsetTop(){
  //   //  if(offset >= this.homeoffset && offset < this.eduoffset) console.log(6)
  //   //  else if(offset >= this.eduoffset && offset < this.skilloffset) console.log(1)
  //   //  else if(offset >= this.skilloffset && offset < this.projectoffset) console.log(2)
  //   //  else if(offset >= this.projectoffset && offset < this.experienceoffset) console.log(3)
  //   //  else if(offset >= this.experienceoffset && offset < this.contactoffset) console.log(4)
  //   //  else console.log(5);
  // }
}
