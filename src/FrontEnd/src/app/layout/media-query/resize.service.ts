import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  get onResize$(): Observable<string> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<string>;

  constructor() {
    this.resizeSubject = new Subject();
  }

  onResize(size: string) {
    this.resizeSubject.next(size);
  }
}
