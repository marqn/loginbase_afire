import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription:Subscription;
  public hasAuth:any;

  public messageAlert:string;
  public login_email:string;
  public login_password:string;
  public sign_email:string;
  public sign_password:string;


  constructor(private authService:AuthService, private router:Router) {
  }

  ngOnInit() {
    this.subscription = this.authService.isAuthenticated().subscribe(authResp => {
        this.hasAuth = authResp;
        if (!authResp)
          this.router.navigate(['loginpage']);
      }
    );
  }

  ngOnDestroy() {}

  public manualLogin():void {
    this.authService.loginUser(this.login_email, this.login_password)
      .then(result => {
        this.router.navigate(['startpage']);
      })
      .catch(err => {
        this.createAlert(err.message);
      });
  }

  public manualSignIn():void {
    this.authService.signin(this.sign_email, this.sign_password)
      .then(result => {
        this.router.navigate(['startpage']);
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

  closeAlert() {
    this.messageAlert = null;
  }

  sendPassword() {
    return this.authService.sendPassword();
  }

  isAuth() {
    return this.hasAuth;
  }


  private createAlert(message:string) {
    this.messageAlert = message;
  }

}
