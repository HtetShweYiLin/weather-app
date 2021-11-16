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
  public places:object = {};

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
    this._weatherService.searchPlaces(data).subscribe(res => {
      console.log("res",res);
      this.places = res;
    })
  }

}
