import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  iconMenu: string = "menu"
  iconMode: string = "bi bi-moon-stars"
  @Output() open = new EventEmitter();
  @Output() dark = new EventEmitter();

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

  toggleIconDark() {
    if (this.iconMode === "bi bi-moon-stars") {
      this.iconMode = "bi bi-brightness-high"
      this.dark.emit(1);
    } else {
      this.iconMode = "bi bi-moon-stars";
      this.dark.emit(0);
    }
  }
}
