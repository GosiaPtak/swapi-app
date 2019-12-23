import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { SwapiListComponent } from './pages/swapi-list/swapi-list.component';
import { SwapiItemComponent } from './pages/swapi-list/swapi-item/swapi-item.component';
import { SwapiListService } from './pages/swapi-list/swapi-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, SwapiListComponent, SwapiItemComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FlexLayoutModule],
  providers: [SwapiListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
