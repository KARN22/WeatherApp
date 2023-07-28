import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(
    private http: HttpClient
  ) { }

  getWeatherDataForCity(cityName: string): Observable<WeatherData>{
    const headers = new HttpHeaders().set(environment.xRapidApiHostHeaderName,environment.xRapidApiHostValue).set(environment.xRapidApiKeyHeaderName, environment.xRapidApiKeyValue);
    const params = new HttpParams().set('q',cityName).set('appid','da0f9c8d90bde7e619c3ec47766a42f4').set('appid','da0f9c8d90bde7e619c3ec47766a42f4')
    return this.http.get<WeatherData>(environment.getCityWeatherUrl, { headers, params });
  }
}
