import { Component, OnInit } from '@angular/core';
import { cardDeck_52_4 } from '../data/utils/cards';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cards = [];
  deckCards = [];
  columnCards: any[][] = [];

  selectedCards = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = cardDeck_52_4();
    this.takeRandomCards(24);
    this.randomColumns();

  }

  takeRandomCards(k: number) {
    for (let i = 0; i < k; i++) {
      let card: number;
      do card = Math.floor(Math.random() * (51 - 0));
      while (this.selectedCards.indexOf(card) !== -1);
      this.selectedCards.push(card);
      this.deckCards.push(this.cards[card]);
    }
  }

  randomColumns() {
    for (let i = 0; i < 7; i++) {
      let card: number;
      let column: number[] = [];
      for (let j = 0; j <= i; j++) {
        do card = Math.floor(Math.random() * (51 - 0));
        while (this.selectedCards.indexOf(card) !== -1);
        column.push(this.cards[card]);
      }
      this.columnCards.push(column);
    }
    console.log(this.columnCards)
  }

}
