import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco-general',
  templateUrl: './marco-general.component.html',
  styleUrls: ['./marco-general.component.css']
})
export class MarcoGeneralComponent implements OnInit {
  sideBar : boolean = false;
  isDark: boolean = false;
  iconNavBar = "menu"
  

  constructor() { }

  ngOnInit(): void {
  }


  onOpen(e:any) {
    console.log("e", e);
    if (e === 1) {
      this.iconNavBar = 'menu_open'
    } else {
      this.iconNavBar = 'menu'
    }  
    var side = document.getElementById("offcanvasExample")    
    if(side?.classList.contains("show")) {
      side?.classList.remove("show")
      this.sideBar = false;
    } else {
      side?.classList.add("show")
      this.sideBar = true;
    }
  }
  onDark(e:any) {
    if (e === 1) {
      this.isDark = true;
    } else {
      this.isDark = false;
    }
  }

}
