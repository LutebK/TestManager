import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { LoginInformation } from 'src/app/models/login-information.model';
import { AuthenticationService } from 'src/app/modules/authentication.service';

@Component({
  selector: 'website-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {
  name: String;
  emaiL: any;
  passworD: any;
  constructor(private afs:AngularFireAuth, private autService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }
  userCreated(){
    let signUp:LoginInformation={email:this.emaiL,password:this.passworD}
    this.afs.createUserWithEmailAndPassword(signUp.email,signUp.password)
    .then((userCredential=> {var user = userCredential.user; console.log("oluşturuldu") ;this.router.navigateByUrl('')})).
    catch((error)=> {var errorCode=error.code; var errorMessage=error.message;})
    }
  userDbCreated(){
    this.autService.userGroupsCreated()
  }
}
