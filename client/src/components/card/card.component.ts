import { Component, Input, OnInit } from '@angular/core';
import { CardProps } from 'src/interfaces/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class Card implements OnInit {
  @Input() data: CardProps = { title: '', note: '' };

  ngOnInit() {}
}
