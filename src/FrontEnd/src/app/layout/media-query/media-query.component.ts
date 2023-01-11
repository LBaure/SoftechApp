import { AfterViewInit, Component, HostListener } from '@angular/core';
import { ResizeService } from './resize.service';

@Component({
  selector: 'app-media-query',
  templateUrl: './media-query.component.html'
})
export class MediaQueryComponent implements  AfterViewInit {

  constructor(private resizeSvc: ResizeService) { }
  @HostListener("window:resize", [])

  ngAfterViewInit(): void {
    this.getScreenSize();
  }

  private getScreenSize () {
    let mediaQuery:string = '';

    var sc = window.innerWidth;
    if (sc < 450){
      mediaQuery = 'xs'
    } else if (sc > 451 && sc < 920 ) {
      mediaQuery = 'sm'
    } else if (sc > 921 && sc < 1250) {
      mediaQuery = 'md'
    } else {
      mediaQuery = 'lg'
    }
    this.resizeSvc.onResize(mediaQuery);
  }


}
