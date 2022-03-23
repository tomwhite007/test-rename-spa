import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[libMultiplyByTen]',
})
export class MultiplyByTenDirective implements OnInit {
  @Input() libMultiplyByTen: number = 0;
  @HostBinding()
  result = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.result = this.libMultiplyByTen * 10;

    this.el.nativeElement.innerHTML = `The answer is <br> - ${this.result}`;
  }
}
