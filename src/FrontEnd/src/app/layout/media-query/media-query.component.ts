import { AfterViewInit, OnInit, Component, HostListener } from '@angular/core';
import { ResizeService } from './resize.service';

@Component({
  selector: 'app-media-query',
  templateUrl: './media-query.component.html'
})
export class MediaQueryComponent implements  OnInit {

  constructor(private resizeSvc: ResizeService) { }
  @HostListener("window:resize", [])

  ngOnInit(): void {
    this.getScreenSize();
  }
  // ngAfterViewInit(): void {
  //   this.getScreenSize();
  // }

  private getScreenSize () {
    let mediaQuery:string = '';

    // sc = size screen
    var sc = window.innerWidth;
    console.log("cs", sc);

    if (sc < 576){
      mediaQuery = 'sm'
    } else if (sc > 576 && sc < 992 ) {
      mediaQuery = 'md'
    } else if (sc > 992 && sc < 1200) {
      mediaQuery = 'lg'
    } else {
      mediaQuery = 'xl'
    }

    console.log("mediaQuery", mediaQuery);

    this.resizeSvc.onResize(mediaQuery);
  }


}
