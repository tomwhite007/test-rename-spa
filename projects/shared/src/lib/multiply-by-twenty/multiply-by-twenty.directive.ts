import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[libMultiplyByTwenty]',
})
export class MultiplyByTwentyDirective implements OnInit {
  @Input('libMultiplyByTwenty') multiplier: number = 0;
  @HostBinding()
  result = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.result = this.multiplier * 20;

    this.el.nativeElement.innerHTML = `${this.multiplier} multiplied by 20 is <br> = ${this.result}`;
  }
}
