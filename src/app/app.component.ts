import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';
import { WeatherData } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  weatherData: WeatherData;
  cityName: string = "Pune";

  constructor(
    private weatherDataService: WeatherDataService
  ) { }

  ngOnInit() {
    this.getWeatherData(this.cityName);
   }

  onSubmit(){

    this.getWeatherData(this.cityName);
    this.cityName = '';

  }

  private getWeatherData(cityName: string){
    this.weatherDataService.getWeatherDataForCity(cityName).subscribe((res)=>{
      if(res){
        this.weatherData = res;
        console.log("Weather Data:: ", this.weatherData)
      }
    })
  }
}
