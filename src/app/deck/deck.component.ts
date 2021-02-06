import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  @Input() cards: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
