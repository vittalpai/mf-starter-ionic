import { Component, NgZone } from '@angular/core';
import { App } from 'ionic-angular';
import { HomePage } from '../home/home'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private securityCheck = "UserLogin"
  public result: string;
  username: string;
  password: string;

  constructor(public app: App, private zone: NgZone) {
  }

  login() {
    var credentials = {
      username: this.username,
      password: this.password
    };
    WLAuthorizationManager.login(this.securityCheck, credentials).then(
      () => {
        console.log('-->  login(): Success ');
        this.app.getRootNav().setRoot(HomePage);
      }, (error) => {
        console.log('-->  login(): Failure ', JSON.stringify(error));
        this.updateResult('Invalid Credentials, Try after sometime.');
      }
    )
  }

  public updateResult(msg: string) {
    this.zone.run(() => {
      this.result = msg;
    });
    // Clear text boxes
    this.username = "";
    this.password = "";
  }
  
}
