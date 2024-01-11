import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-textbox-calculator',
  templateUrl: './textbox-calculator.component.html',
  styleUrls: ['./textbox-calculator.component.css']
})
export class TextboxCalculatorComponent {
  private debouncer: Subject<number> = new Subject<number>();

  @Input()
  public placeholder: string = '';

  @Input()
  public value: number = 0;

  @Output() onDebouncer: EventEmitter<number> = new EventEmitter<number>();
  public debouncerSupscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSupscription = this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.onDebouncer.emit(value);
    });
  }
  ngOnDestroy(): void {
    this.debouncerSupscription?.unsubscribe();
  }


  onKeyPresss(value: string): void {
    console.log(value);
    this.debouncer.next(parseFloat(value));
  }
}
