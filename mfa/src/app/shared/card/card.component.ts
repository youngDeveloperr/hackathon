import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mfa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() width?: string;

  constructor() {}

  ngOnInit(): void {}

  getWidth() {
    if (!this.width) {
      return 'fit-content';
    }

    return this.width;
  }
}
