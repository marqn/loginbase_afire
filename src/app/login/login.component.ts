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

  public login_email:string;
  public login_password:string;

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
        console.log(err.message);
      });
  }
  
  public googleLogin() {
    this.authService.googleLogin();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }
}
