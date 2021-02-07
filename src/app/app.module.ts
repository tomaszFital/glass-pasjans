import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BallComponent } from './ball/ball.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { CardComponent } from './card/card.component';
import { DeckComponent } from './deck/deck.component';
import { StackComponent } from './stack/stack.component';
import { EmptyFieldComponent } from './empty-field/empty-field.component';

@NgModule({
  declarations: [
    AppComponent,
    BallComponent,
    GameComponent,
    CardComponent,
    DeckComponent,
    StackComponent,
    EmptyFieldComponent
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
