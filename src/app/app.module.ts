import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { InputComponent } from './assignments/assignement2/input.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent,
    FormComponent,
    ServerComponent,
    ServersComponent,
    InputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
