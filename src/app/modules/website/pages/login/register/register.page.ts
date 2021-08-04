import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { LoginInformation } from 'src/app/models/login-information.model';

@Component({
  selector: 'website-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  constructor(private afs:AngularFireAuth ) { }

  ngOnInit(): void {
  }
  userCreated(emailInput:any, passwordInput:any){
    let signUp:LoginInformation={email:emailInput,password:passwordInput}
    this.afs.createUserWithEmailAndPassword(signUp.email,signUp.password).then((userCredential=> {var user = userCredential.user})).catch((error)=> {var errorCode=error.code; var errorMessage=error.message;})
    }
}
