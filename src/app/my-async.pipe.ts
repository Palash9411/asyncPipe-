import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
  name: 'myAsync'
})
export class MyAsyncPipe implements PipeTransform {

  constructor(private readonly ref: ChangeDetectorRef){}

  private lastValue?: any;
  private observable?: Observable<any>;
  private subscription?: Subscription;
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  transform(observable: Observable<any>, ...args: unknown[]): unknown {

    if (!this.observable) {
      this.observable = observable;
     this.subscription= observable.subscribe(value => this.lastValue = value);
     this.ref.markForCheck()
    }
    return this.lastValue;
  }
}
