import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToastrModule } from '../lib/toastr';
import { PinkToast } from './pink.toast';

@NgModule({
  declarations: [
    AppComponent,
    PinkToast,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  entryComponents: [PinkToast],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }