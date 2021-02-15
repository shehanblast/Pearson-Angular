import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { CountryDetailsComponent } from './country-details/country-details.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    AddCountryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
