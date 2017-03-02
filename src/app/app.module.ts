import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {AuthService} from "./auth.service";
import {StartGameComponent} from "./start-game/start-game.component";
import { GameComponent } from './game/game.component';

const routes:Routes = [
  {path: '', component: StartGameComponent},
  {path: 'loginpage', component: LoginComponent},
  {path: 'startpage', component: StartGameComponent},
  {path: 'game', component: GameComponent}
];


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCiAmlBTBoz87r-eUg4jdjBoFyWR4hbgow",
  authDomain: "travgame-b9580.firebaseapp.com",
  databaseURL: "https://travgame-b9580.firebaseio.com",
  storageBucket: "travgame-b9580.appspot.com",
  messagingSenderId: "556943703983"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartGameComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
