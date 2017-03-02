import {Component, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  private subscription:Subscription;

  constructor(private authService:AuthService, private router:Router) {
  }

  ngOnInit() {
    this.subscription = this.authService.isAuthenticated().subscribe(authResp => {
        if (!authResp)
          this.router.navigate(['loginpage']);
      }
    );
  }

}
