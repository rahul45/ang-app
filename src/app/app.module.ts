import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeroesComponent} from '../app/heros-app/heros.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
