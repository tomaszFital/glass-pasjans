import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  cardValue: string;
  cardColour: "red-card" | "black-card" | "blue-card" = "blue-card";
  cardSymbol: string;
  @Input() visible: boolean;

  @Input() set card(card: any) {
    const cardValue: string[] = ["J", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "W", "Q", "K"];
    const cardSymbol: string[] = ["♥", "♦", "♠", "♣"];

    this.cardValue = cardValue[card.value];

    if (this.cardValue === "J") return;

    this.cardColour = card.symbol < 2 ? "red-card" : "black-card";
    this.cardSymbol = cardSymbol[card.symbol];
  }

  constructor() { }
}
