import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/utils/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  iconMode: string = "bi bi-moon-stars"
  user: any;
  name:string = "";
  showTitle : boolean = false;
  @Output() open = new EventEmitter();
  @Output() dark = new EventEmitter();
  @Input() iconMenu: string = 'menu';

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {
    this.user = auth.getUser();
    // this.user = {
    //   name: "Luis Baure",
    //   nit: '63397323'
    // }
  }

  ngOnInit(): void {
    if(this.user) {
      var userArr = this.user.name.split(" ")
      this.name = userArr[0];
    }
  }

  toggle() {
    if (this.iconMenu === "menu") {
      this.open.emit(1);
    } else {
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
    this.http.get('/api/sso/logout').subscribe(
      success => {
        this.router.navigate(['login']);
      });
  }
}
