
import { ProfileServiceService } from './../services/profile-service.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { AuthenticationService } from 'src/app/modules/authentication.service';
import { AngularFireStorage } from '@angular/fire/storage';


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
  imgUrl:any;
  userName:any;
  constructor(private router: Router,private aut:AngularFireAuth, private authService: AuthenticationService, private profileService: ProfileServiceService, private storage: AngularFireStorage) { }

  ngOnInit(): void {

    if(this.authService.count==0)
      this.userDbCreated()

    //this.profileService.getProfileNavBarImg().then(a=> {a.subscribe((b:any)=> {console.log(this.imgUrl = b.data().picture)})})
    this.userName=this.authService.name
    //this.abc()


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
  async userDbCreated(){
    this.authService.userIdDbCreate()

  }
  async getNavBarImg(){
    this.profileService.getProfileInfos().then(a=> {a.subscribe((b:any)=> {this.imgUrl=b.data().picture,this.userName=b.data().name+ b.data().surname} )})
  }

  // async abc(){
  //  this.storage.ref('/users/'+ (await this.aut.currentUser).uid+"/profilePicture/"+await this.profileService.imgNameP).getDownloadURL().subscribe(a=> {console.log(a)})
  // }

}
