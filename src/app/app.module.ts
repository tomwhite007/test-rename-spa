import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestInterceptor } from './test.interceptor';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [AppComponent, TestPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TestInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
