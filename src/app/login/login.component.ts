import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription:Subscription;

  public messageAlert:string;
  public login_email:string;
  public login_password:string;
  public sign_email:string;
  public sign_password:string;

  constructor(private authService:AuthService) {
  }

  ngOnInit() {
    this.subscription = this.authService.isAuthenticated().subscribe(authResp =>
      console.log('isAuthenticated: ', authResp)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public manualLogin():void {
    this.authService.loginUser(this.login_email, this.login_password)
      .then(result => {
        console.log('jest zalogowany');
      })
      .catch(err => {
        this.createAlert(err.message);
      });
  }

  public manualSignIn():void {
    this.authService.signin(this.sign_email, this.sign_password)
      .then(result => {
        console.log('jest zalogowany');
      })
      .catch(err => {
        this.createAlert(err.message);
      });
  }

  public googleLogin() {
    this.authService.googleLogin();
  }

  public fbLogin() {
    console.log('fb login not implemented yet');
  }

  onLogout() {
    this.authService.logout();
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  closeAlert() {
    this.messageAlert = null;
  }

  sendPassword() {
    return this.authService.sendPassword();
  }

  private createAlert(message:string) {
    console.log(message);
    this.messageAlert = message;
  }
  
}
