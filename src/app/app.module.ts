import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NO_ERRORS_SCHEMA }      from '@angular/core'; //



import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { FormsModule } from '@angular/forms';
import { UploadModule } from './upload/upload.module';
import { FlexLayoutModule } from '@angular/flex-layout';


registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
    
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  // schemas:[NO_ERRORS_SCHEMA ], // add this line

  bootstrap: [AppComponent]
})
export class AppModule { }
