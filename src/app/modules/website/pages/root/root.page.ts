import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'website-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.css']
})
export class RootPage implements OnInit {

  mainMenuPath = true;
  mainMenuPath2=false;
  constructor() { }

  ngOnInit(): void {
  }

  setPath(){
    this.mainMenuPath = !this.mainMenuPath;
    this.mainMenuPath2 = !this.mainMenuPath2;
    if(this.mainMenuPath2)
      document.getElementById("projectsection").style.display="none";
    else
      document.getElementById("projectsection").style.display="block";  
  }
  
}
