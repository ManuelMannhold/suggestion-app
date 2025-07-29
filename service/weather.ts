import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  url = `https://api.openweathermap.org/data/2.5/weather?q=${getCity(
    city
  )}&units=metric&lang=de&appid=${this.API_KEY}`;

  constructor() {}

  getCity(city) {
    return city;
  }
}
