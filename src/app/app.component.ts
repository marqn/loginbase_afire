import {Component, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {AuthService} from "./auth.service";
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private subscription:Subscription;
  public hasAuth:any;

  constructor(private authService:AuthService) {
  }

  ngOnInit() {
    this.subscription = this.authService.isAuthenticated().subscribe(authResp => {
        this.hasAuth = authResp;
      }
    );

    var $row = $('#navbar-logo');
    $row.on('mouseover', function () {
      $row.fadeOut(1000);
    });
    $row.on('mouseout', function () {
      $row.fadeIn(1000);
    });
  }

  isAuth() {
    return this.hasAuth;
  }

  onLogout() {
    this.authService.logout();
  }

}
