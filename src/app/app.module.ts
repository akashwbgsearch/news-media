import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocalePipe } from "./pipes/locale.pipe";
import { KeysPipe } from "./pipes/keys.pipe";
import { DateFormatPipe } from "./pipes/date.pipe";
import { ObjectFilterPipe } from "./pipes/objectFilter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LocalePipe,
    KeysPipe,
    DateFormatPipe,
    ObjectFilterPipe
  ],
  imports: [
    BrowserModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
