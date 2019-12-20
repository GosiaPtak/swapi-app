import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SwapiListComponent } from './pages/swapi-list/swapi-list.component';
import { SwapiItemComponent } from './pages/swapi-list/swapi-item/swapi-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwapiService } from './shared/services/swapi.service';

@NgModule({
  declarations: [
    AppComponent,
    SwapiListComponent,
    SwapiItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
