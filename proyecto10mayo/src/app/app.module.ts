import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalesComponent } from './animales/animales.component';
import { BannerComponent } from './banner/banner.component';
import { ResponsividadComponent } from './responsividad/responsividad.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalesComponent,
    BannerComponent,
    ResponsividadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
