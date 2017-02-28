import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {AuthService} from "./auth.service";

/*
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: '**', component: PageNotFoundComponent }
];
*/

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
