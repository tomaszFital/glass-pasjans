import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  @Input() cards: any[] = [];
  @Input() allVisable: boolean;
  @Input() showAll: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
