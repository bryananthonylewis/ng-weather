import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  static ICON_URL =
    "https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/";
  currentConditions = [];
  weeklyForcastConditions = [];

  constructor(private http: HttpClient) {}

  addCurrentConditions(zipcode) {
    this.http
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=5a4b2d457ecbef9eb2a71e480b947604`
      )
      .subscribe(data =>
        this.currentConditions.push({ zip: zipcode, data: data })
      );
    // console.log(this.currentConditions);
  }

  getForecast(zipcode) {
    this.weeklyForcastConditions = [];
    this.http
      .get(
        `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=5a4b2d457ecbef9eb2a71e480b947604`
      )
      .subscribe(data =>
        this.weeklyForcastConditions.push({ zip: zipcode, data: data })
      );
    // console.log(this.weeklyForcastConditions);
  }

  removeCurrentConditions(i) {
    this.currentConditions.splice(i, 1);
  }

  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService.ICON_URL + "ic_storm.png";
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + "ic_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + "ic_light_rain.png";
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + "ic_snow.png";
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + "ic_cloudy.png";
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + "ic_fog.png";
    else return WeatherService.ICON_URL + "ic_clear.png";
  }
}
