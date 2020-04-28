import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  lib = true;
  express = true;
  oshop = true;
  popup = false;
  readit = true;
  tictac = true;
  list = true;
  clone = true;
  logo = true;
  id = 5;
  info = {
    title: "",
    date: "",
    tech: "",
    detail: "",
    github: "",
    website: "",
    image: ""
  }
  data = [
    {
      title: "",
      date: "",
      tech: "",
      detail: "",
      github: "",
      website: "",
      image: ""
    },
    {
      title: "e-Library",
      date: "Jan 20",
      tech: "Angular, Firebase,Electron",
      detail: "Admin panel for libray management system.",
      github: "https://github.com/mrinal2305/Hack_2020",
      website: "https://smart-library-55e4d.firebaseapp.com/",
      image: "./../../assets/project/library.jpg"
    },
    {
      title: "Express",
      date: "Feb 20",
      tech: "React, Firebase",
      detail: "Admin panel for private startup 'Express",
      github: "https://github.com/mrinal2305/Express",
      website: "https://express-b0920.firebaseapp.com/",
      image: "./../../assets/project/express.PNG"
    },
    {
      title: "OShop",
      date: "Jul 19 - Sep 19",
      tech: "Angular, Firebase",
      detail: "An online grocerry shopping web app.Made with angular and firebase",
      github: "https://github.com/mrinal2305/OShop",
      website: "https://oshop-746be.firebaseapp.com/",
      image: "./../../assets/project/oshop.jpg"
    },
    {
      title: "ReadIt",
      date: "Sep 19 - Oct 19",
      tech: "Electron, Vanilla JS",
      detail: "An URL storing desktop software.It can store image and link of a website by just adding URL.",
      github: "https://github.com/mrinal2305/Read-It",
      website: "https://github.com/mrinal2305/Read-It/releases",
      image: "./../../assets/project/Capture.PNG"
    },
    {
      title: "Tic-Tac-Toe",
      date: "Feb 20",
      tech: "React",
      detail: "A fun project of tic tac toe game made in react.",
      github: "https://github.com/mrinal2305/Tic-Tac-Toe",
      website: "https://epic-meninsky-48b2eb.netlify.com/",
      image: "./../../assets/project/ticTacToe.jpg"
    },
    {
      title: "Shopping List",
      date: "Sep 18 - Oct 18",
      tech: "Angualar ,Node, MongoDB",
      detail: "Shopping list web made on angular front end and node as backend",
      github: "https://github.com/mrinal2305/Shopping-List",
      website: "https://pure-crag-54749.herokuapp.com/",
      image: "./../../assets/project/shoppingList.jpg"
    },
    {
      title: "Clone",
      date: "Apr 20",
      tech: "React",
      detail: "Unacademy teacher detail panel page clone in react.",
      github: "https://github.com/mrinal2305/unacademyClone",
      website: "https://naughty-goodall-28dedb.netlify.app/",
      image: "./../../assets/project/unacedemy.jpg"
    },
    {
      title: "Logo",
      date: "Apr 20",
      tech: "React",
      detail: "Unacademy teacher detail panel page clone in react.",
      github: "https://github.com/mrinal2305/Logo-and-CV/blob/master/Logo_sample.png",
      website: "https://dribbble.com/shots/6971059-Logo",
      image: "./../../assets/project/log.jpg"
    },
  ]

  constructor() { }
  popupFn(e) {
    this.popup = true;
    this.info = this.data[e.target.id];
    
  }
  ngOnInit(): void {
   
  }

}
