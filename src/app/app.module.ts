import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BallComponent } from './ball/ball.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { CardComponent } from './card/card.component';
import { DeckComponent } from './deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    BallComponent,
    GameComponent,
    CardComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
