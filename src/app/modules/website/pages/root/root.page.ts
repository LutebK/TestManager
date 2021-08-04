
import { AngularFireAuth } from '@angular/fire/auth';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'website-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.css']
})
export class RootPage implements OnInit {

  mainMenuPath = true;
  mainMenuPath2 = false;
  mainMenuOut = false;
  a: any;
  b: any;
  array: any[] = [];

  constructor(private router: Router,private aut:AngularFireAuth) { }

  ngOnInit(): void {
    this.aut.currentUser.then(a=> {console.log(a.uid)})
  }

  setPath() {
    this.mainMenuPath = !this.mainMenuPath;
    this.mainMenuPath2 = !this.mainMenuPath2;
    if (this.mainMenuPath2)
      document.getElementById("projectsection").style.display = "none";
    else
      document.getElementById("projectsection").style.display = "block";
  }
  setheader() {
    this.mainMenuOut = !this.mainMenuOut;
  }
  getUrl() {
    return window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1)
  }
  getBackUrl() {
    this.array = this.router.url.split("/")
    this.array.pop()
    let url = ""
    this.array.forEach(a =>  this.array[this.array.length - 1] == a ? url = url + a : url = url + a + "/" );
    this.router.navigateByUrl(url)

  }
  signOut(){
    this.aut.signOut();
    this.router.navigateByUrl("")
  }
}
