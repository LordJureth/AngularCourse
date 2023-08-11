import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { WarningMessageComponent} from './warning-message/warning-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessMessageComponent,
    WarningMessageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
