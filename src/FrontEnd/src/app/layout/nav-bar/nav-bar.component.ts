import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/utils/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  iconMenu: string = "menu"
  iconMode: string = "bi bi-moon-stars"
  user: any;
  name:string = "";
  @Output() open = new EventEmitter();
  @Output() dark = new EventEmitter();

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {
    this.user = auth.getUser();
  }

  ngOnInit(): void {
    if(this.user) {
      var userArr = this.user.name.split(" ")
      this.name = userArr[0];
    }
    console.log("user", this.user);

  }

  toggle() {
    console.log("toggle");

    if (this.iconMenu === "menu") {
      this.iconMenu = "menu_open"
      this.open.emit(1);
    } else {
      this.iconMenu = "menu"
      this.open.emit(0);
    }
  }

  toggleIconDark() {
    if (this.iconMode === "bi bi-moon-stars") {
      this.iconMode = "bi bi-brightness-high"
      this.dark.emit(1);
    } else {
      this.iconMode = "bi bi-moon-stars";
      this.dark.emit(0);
    }
  }

  logout() {
    console.log("loggout");

    this.http.get('/api/sso/logout').subscribe(
      success => {
        this.router.navigate(['login']);
      });
  }
}
