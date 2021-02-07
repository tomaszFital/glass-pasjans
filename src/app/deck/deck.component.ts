import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  @Input() cards: any[] = [];
  deckCards: any[] = [];
  shownCards: any[] = [];

  constructor() { }

  ngOnInit() {
    this.deckCards = this.cards;
  }

  showCard(): void {
    if (this.deckCards.length)
      this.shownCards.push(this.deckCards.pop());
    else {
      this.deckCards = this.shownCards.reverse();
      this.shownCards = [];
    }

  }

}
