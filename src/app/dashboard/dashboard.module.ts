import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GlobalComponentsModule } from "../global-components/global-components.module";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ExtendedForecastComponent } from './components/extended-forecast/extended-forecast.component';
import { SearchComponent } from './components/search/search.component';

import { WeatherService } from 'src/app/dashboard/services/weather.service';

@NgModule({
  declarations: [WeatherHomeComponent, CurrentWeatherComponent, ExtendedForecastComponent, SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    GlobalComponentsModule,
    DashboardRoutingModule
  ],
  providers: [
    WeatherService
  ]
})
export class DashboardModule { }
