import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { MultiplyByTenDirective } from './multiply-by-ten';
import { MultiplyByTwentyDirective } from './multiply-by-twenty/multiply-by-twenty.directive';

@NgModule({
  declarations: [
    SharedComponent,
    MultiplyByTenDirective,
    MultiplyByTwentyDirective,
  ],
  imports: [],
  exports: [SharedComponent, MultiplyByTenDirective, MultiplyByTwentyDirective],
})
export class SharedModule {}
