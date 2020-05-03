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
  };
  default = "./../../assets/empty.jpg";
  images = {
    library : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Flibrary.jpg?alt=media&token=16f54209-7d3c-489f-a9d4-fb796fc3b709",
    express : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Fexpress.PNG?alt=media&token=b30acd34-ad6c-4b88-b147-5297ce44f38d",
    oshop   : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Foshop.jpg?alt=media&token=d06b0830-751d-4794-851a-b32d1c890a19",
    readit  : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2FreadIt.PNG?alt=media&token=98fd6096-9371-44df-bce2-fd7a2fe59103",
    ticTac  : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2FticTacToe.jpg?alt=media&token=d2bb246c-56f1-43b1-88b9-494a365276c0",
    list    : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2FshoppingList.jpg?alt=media&token=0cff10ac-e7d2-4b65-bf6e-05a2ebe0784b",
    clone   : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Funacedemy.jpg?alt=media&token=32860e3e-90c2-477f-abf2-102c6792e33f",
    logo    : "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Flog.jpg?alt=media&token=a86f8cb2-c32a-4969-ba07-a971b04f0207"
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
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Flibrary.jpg?alt=media&token=16f54209-7d3c-489f-a9d4-fb796fc3b709"
    },
    {
      title: "Express",
      date: "Feb 20",
      tech: "React, Firebase",
      detail: "Admin panel for private startup 'Express",
      github: "https://github.com/mrinal2305/Express",
      website: "https://express-b0920.firebaseapp.com/",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Fexpress.PNG?alt=media&token=b30acd34-ad6c-4b88-b147-5297ce44f38d"
    },
    {
      title: "OShop",
      date: "Jul 19 - Sep 19",
      tech: "Angular, Firebase",
      detail: "An online grocerry shopping web app.Made with angular and firebase",
      github: "https://github.com/mrinal2305/OShop",
      website: "https://oshop-746be.firebaseapp.com/",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Foshop.jpg?alt=media&token=d06b0830-751d-4794-851a-b32d1c890a19"
    },
    {
      title: "ReadIt",
      date: "Sep 19 - Oct 19",
      tech: "Electron, Vanilla JS",
      detail: "An URL storing desktop software.It can store image and link of a website by just adding URL.",
      github: "https://github.com/mrinal2305/Read-It",
      website: "https://github.com/mrinal2305/Read-It/releases",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2FreadIt.PNG?alt=media&token=98fd6096-9371-44df-bce2-fd7a2fe59103"
    },
    {
      title: "Tic-Tac-Toe",
      date: "Feb 20",
      tech: "React",
      detail: "A fun project of tic tac toe game made in react.",
      github: "https://github.com/mrinal2305/Tic-Tac-Toe",
      website: "https://epic-meninsky-48b2eb.netlify.com/",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2FticTacToe.jpg?alt=media&token=d2bb246c-56f1-43b1-88b9-494a365276c0"
    },
    {
      title: "Shopping List",
      date: "Sep 18 - Oct 18",
      tech: "Angualar ,Node, MongoDB",
      detail: "Shopping list web made on angular front end and node as backend",
      github: "https://github.com/mrinal2305/Shopping-List",
      website: "https://pure-crag-54749.herokuapp.com/",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2FshoppingList.jpg?alt=media&token=0cff10ac-e7d2-4b65-bf6e-05a2ebe0784b"
    },
    {
      title: "Clone",
      date: "Apr 20",
      tech: "React",
      detail: "Unacademy teacher detail panel page clone in react.",
      github: "https://github.com/mrinal2305/unacademyClone",
      website: "https://naughty-goodall-28dedb.netlify.app/",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Funacedemy.jpg?alt=media&token=32860e3e-90c2-477f-abf2-102c6792e33f"
    },
    {
      title: "Logo",
      date: "Apr 20",
      tech: "React",
      detail: "Logo made on figma.",
      github: "https://github.com/mrinal2305/Logo-and-CV/blob/master/Logo_sample.png",
      website: "https://dribbble.com/shots/6971059-Logo",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-18e5a.appspot.com/o/project%2Flog.jpg?alt=media&token=a86f8cb2-c32a-4969-ba07-a971b04f0207"
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
