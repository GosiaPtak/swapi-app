import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { SwapiListOpt1Component } from './pages/swapi-list-option1/swapi-list.component';
import { SwapiItemComponent } from './pages/swapi-list-option1/swapi-item/swapi-item.component';
import { SwapiListService } from './pages/swapi-list-option1/swapi-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, SwapiListOpt1Component, SwapiItemComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FlexLayoutModule, MatButtonModule],
  providers: [SwapiListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
