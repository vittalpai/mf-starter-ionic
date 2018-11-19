import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private securityCheck = "Userlogin"
  public result: string;

  constructor(public navCtrl: NavController) {
  }

  login(credentials : Object) {
    WLAuthorizationManager.login(this.securityCheck, credentials).then(
      () => {
        console.log('-->  login(): Success ');
        this.navCtrl.push(HomePage);
      }, (error) => {
        console.log('-->  login(): Failure ', error);
        this.updateResult('Invalid Credentials, Try after sometime.');
      }
    )
  }

  public updateResult(msg: string) {
    this.result = msg;
  }
  
}
