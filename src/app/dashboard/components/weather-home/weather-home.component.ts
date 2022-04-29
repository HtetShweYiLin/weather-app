import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/dashboard/services/theme.service';
import { WeatherService } from 'src/app/dashboard/services/weather.service';
import { theme1 } from 'src/app/models/theme';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  private nightMode:boolean = false;
  public cities:Array<any> = [];

  constructor(
    private _themeService: ThemeService,
    private _weatherService: WeatherService
  ) { }

  ngOnInit() {
  }

  changeTheme(event) {
    this.nightMode = event.target.checked;
    let theme = this.nightMode ? 1 : 0;
    this._themeService.changeActiveTheme(theme);
  }

  searchPlaces($event) {
    console.log($event.target.value);
    let searchValue = $event.target.value;
    let data = {
      "language": "en",
      "query": searchValue,
      "type": "city"
    };
    if(searchValue) {
      this._weatherService.searchPlaces(data).subscribe(res => {
        console.log("res",res);
        this.cities = res["hits"].filter((item: any) => item.is_city)
        .map((i: any) => {
          return i.locale_names[0] + ', ' + i.country;
        });
        console.log("cities",this.cities);
      })
    }else {
      this.cities = [];
    }
  }

  clearSearch() {
    this.cities = [];
  }

  selectPlace(city) {
    console.log("selectPlace",city);
    this.clearSearch();
    this.getPlaceWeather(city);
  }

  getPlaceWeather(city) {
    this._weatherService.getWeather(city).subscribe(res => {
      console.log("getPlaceWeather res",res);
    })
  }

}
