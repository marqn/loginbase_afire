import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {AngularFireAuth, AuthProviders, AuthMethods} from "angularfire2/index";

@Injectable()
export class AuthService {

  constructor(private auth:AngularFireAuth/*, private router:Router*/) {
  }

  loginUser(email, password) {
    var creds:any = {email: email, password: password};
    var provider:any = {provider: AuthProviders.Password, method: AuthMethods.Password};

    return this.auth.login(creds, provider);
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
}
