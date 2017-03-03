import {Component, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
declare  var $:any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private subscription:Subscription;

  constructor(private authService:AuthService, private router:Router) {
    $('testId').fadeIn("fast");

  }

  ngOnInit() {
    this.subscription = this.authService.isAuthenticated().subscribe(authResp => {
        if (!authResp)
          this.router.navigate(['loginpage']);
      }
    );
  }

}
