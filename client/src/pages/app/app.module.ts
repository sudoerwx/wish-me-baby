import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Card } from 'src/components/card/card.component';

import { AppRoutingModule } from '../../routing.module';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, Card, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
