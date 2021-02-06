import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
  animations: [
    trigger("horizontal", [
      state("left", style({ left: "0%" })),
      state("right", style({ left: "calc(100% - 5rem)" })),
      transition("left => right", [animate("5000ms")]),
      transition("right => left", [animate("5000ms")]),
    ]),
    trigger("vertical", [
      state("top", style({ top: "0%" })),
      state("bottom", style({ top: "calc(100% - 5rem)" })),
      transition("top => bottom", [animate("8000ms")]),
      transition("bottom => top", [animate("8000ms")]),
    ]),
  ]
})
export class BallComponent {
  horizontalBall: boolean = false;
  verticalBall: boolean = false;

  constructor() {
    setTimeout(() => {
      this.horizontalBall = !this.horizontalBall;
      this.verticalBall = !this.verticalBall;
      setInterval(() => this.horizontalBall = !this.horizontalBall, 5000)
      setInterval(() => this.verticalBall = !this.verticalBall, 8000)
    }, 0)
  }
}
