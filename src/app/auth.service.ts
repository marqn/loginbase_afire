import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {AngularFireAuth, AuthProviders, AuthMethods} from "angularfire2/index";
import {AngularFire} from "angularfire2/angularfire2";

@Injectable()
export class AuthService {

  constructor(private af:AngularFire, private auth:AngularFireAuth/*, private router:Router*/) {
  }

  loginUser(email, password) {
    var credentials:any = {email: email, password: password};
    var provider:any = {provider: AuthProviders.Password, method: AuthMethods.Password};

    return this.auth.login(credentials, provider);
  }

  signin(email, password) {
    var credentials:any = {email: email, password: password};
    return this.auth.createUser(credentials);
  }

  googleLogin() {
    var provider:any = {provider: AuthProviders.Google, method: AuthMethods.Redirect};
    return this.auth.login(provider);
  }

  logout() {
    this.auth.logout();
    // this.router.navigate(['/']);
  }

  isAuthenticated():Observable<any> {
    return this.auth; //auth is already an observable
  }

  sendPassword() {
    // return this.
  }
}
