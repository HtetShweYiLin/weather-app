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
}
