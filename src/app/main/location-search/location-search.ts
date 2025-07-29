import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-location-search',
  imports: [],
  templateUrl: './location-search.html',
  styleUrl: './location-search.css',
})
export class LocationSearch {
  constructor() {}

  getWeather(city: string) {
    console.log('Die Stadt ist:', city);
  }
}
