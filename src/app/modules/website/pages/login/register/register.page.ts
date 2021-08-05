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
  count:number=0;
  constructor(private afs:AngularFireAuth, private autService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }
  userCreated(){
    let signUp:LoginInformation={email:this.emaiL,password:this.passworD}
    this.afs.createUserWithEmailAndPassword(signUp.email,signUp.password)
    .then((userCredential=> {var user = userCredential.user; console.log("oluşturuldu"); this.setUserName() ; this.router.navigateByUrl('/website')})).
    catch((error)=> {var errorCode=error.code; var errorMessage=error.message;})
    }
  setUserName(){
    this.autService.getRegisterName(this.name,this.count)
    this.count++
    console.log(this.name)
  }
}
