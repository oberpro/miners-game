import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MgToolbarComponent } from './mg-toolbar/mg-toolbar.component';
import { MgValueoutputComponent } from './mg-valueoutput/mg-valueoutput.component';
import { MgEinheitenComponent } from './mg-einheiten/mg-einheiten.component';
import { MgEinheitComponent } from './mg-einheit/mg-einheit.component';
@NgModule({
  declarations: [
    AppComponent,
    MgToolbarComponent,
    MgValueoutputComponent,
    MgEinheitenComponent,
    MgEinheitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
