import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  iconMenu: string = "menu"
  @Output() open = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    if (this.iconMenu === "menu") {
      this.iconMenu = "menu_open"
      this.open.emit(1);
    } else {
      this.iconMenu = "menu"
      this.open.emit(0);
    }
  }
}
