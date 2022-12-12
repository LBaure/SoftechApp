import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco-general',
  templateUrl: './marco-general.component.html',
  styleUrls: ['./marco-general.component.css']
})
export class MarcoGeneralComponent implements OnInit {
  sideBar : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onOpen(e:any) {
    var side = document.getElementById("side")
    if(side?.classList.contains("show")) {
      side?.classList.remove("show")
      this.sideBar = false;
    } else {
      side?.classList.add("show")
      this.sideBar = true;
    }
  }

}
