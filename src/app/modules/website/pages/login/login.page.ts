import { LoginInformation } from 'src/app/models/login-information.model';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/authentication.service';
@Component({
  selector: 'website-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
  signControl:boolean;
  email:any;
  password:any;

  constructor(private afs:AngularFireAuth, private router:Router,private userId:AuthenticationService) {

  }

  ngOnInit(): void {

  }

  userSign(){
    let uid : LoginInformation={email:this.email,password:this.password}
    this.afs.signInWithEmailAndPassword(this.email,this.password).then(
      userCredential=> {var user = userCredential.user;this.signControl=true;this.router.navigateByUrl(
      "/website"); this.userId.loginViaEmailAndPassword(uid);},
      error=> {this.signControl=false})

  }


  }
