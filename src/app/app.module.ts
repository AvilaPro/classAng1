import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**Componentes de la aplicacion */
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { BannerComponent } from './main/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
