import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  data = 'init';
  math = Math;

  ngOnInit() {
    this.makePingRequest('hello');
  }
  makePingRequest(query: string) {
    for (let i = 0; i < 100; i++) {
      fetch('http://localhost:8080/ping?' + new URLSearchParams({ q: query }))
        .then((res) => res.text())
        .then((data) => {
          this.data = data;
        });
    }
  }
}
