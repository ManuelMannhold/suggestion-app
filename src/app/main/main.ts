import { Component } from '@angular/core';
import { Activitysuggestion } from './activitysuggestion/activitysuggestion';
import { LocationSearch } from './location-search/location-search';

@Component({
  selector: 'app-main',
  imports: [Activitysuggestion, LocationSearch],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
