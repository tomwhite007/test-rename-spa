import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { MultiplyByTenDirective } from './multiply-by-ten';

@NgModule({
  declarations: [SharedComponent, MultiplyByTenDirective],
  imports: [],
  exports: [SharedComponent, MultiplyByTenDirective],
})
export class SharedModule {}
