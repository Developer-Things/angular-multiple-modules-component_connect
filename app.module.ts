import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ParentModule1Module } from './parent-module1/parent-module1.module';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ParentModule1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
