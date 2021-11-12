import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/dashboard/services/theme.service';
import { theme1 } from 'src/app/models/theme';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  private nightMode:boolean = false;
  constructor(
    private _themeService: ThemeService
  ) { }

  ngOnInit() {
  }

  changeTheme(event) {
    this.nightMode = event.target.checked;
    let theme = this.nightMode ? 1 : 0;
    this._themeService.changeActiveTheme(theme);
  }

}
