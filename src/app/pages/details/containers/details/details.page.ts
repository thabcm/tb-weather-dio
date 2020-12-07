import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/shared/state/app.reducer';
import { CityDailyWeather } from 'src/app/shared/models/weather.model';
import * as fromDetailsActions from '../../state/details.actions';

@Component({
  selector: 'jv-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());
  }
}