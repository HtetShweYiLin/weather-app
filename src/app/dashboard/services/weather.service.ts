import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public searchApiUrl = environment.placesApiUrl;
  public weatherApiUrl = environment.weatherApiUrl + 'data/2.5/';
  public api_key = environment.weatherApiKey;

  constructor(private http: HttpClient) { }

  searchPlaces(data) {
    let url = this.searchApiUrl + '/1/places/query';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(url, data, httpOptions).pipe(map((res:Response) => {
      let result = res;
      return result;
    }));
  }

  getWeather(city) {
    let url = this.weatherApiUrl + 'weather?q=London,uk&APPID=826eae01efc7aa864e4a26f60eb6a55b';
    // let url = this.weatherApiUrl + 'weather?q=' + city + '&APPID=' + this.api_key;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(url, httpOptions).pipe(map((res:Response) => {
      let result = res;
      return result;
    }));
  }
}
