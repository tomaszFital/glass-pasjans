import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cards = [{
    value: 10,
    symbol: 0,
    hidden: false,
  }, {
    value: 3,
    symbol: 1,
    hidden: true,
  }, {
    value: 4,
    symbol: 2,
    hidden: false,
  }, {
    value: 1,
    symbol: 3,
    hidden: false,
  }, {
    value: 0,
    hidden: true,
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
