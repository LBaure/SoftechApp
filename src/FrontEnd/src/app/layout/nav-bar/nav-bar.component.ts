import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  iconToogle : string = "menu"

  constructor() { }

  ngOnInit(): void {
  }

  toogle () {
    if (this.iconToogle === "menu") {
      this.iconToogle = "menu_open"
    } else {
      this.iconToogle = "menu"
    }

  }

}
