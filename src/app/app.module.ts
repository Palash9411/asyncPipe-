import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './components/app-child/app-child.component';
import { MyAsyncPipe } from './my-async.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    MyAsyncPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
