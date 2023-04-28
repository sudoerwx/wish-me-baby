import { Component, OnInit } from '@angular/core';
import { CardProps } from 'src/interfaces/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: CardProps[] = [
    { title: 'title', note: 'description', image: '' },
    { title: 'title', note: 'description', price: 123 },
  ];
  ngOnInit() {}
}
