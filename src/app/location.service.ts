import { Injectable } from "@angular/core";
import { WeatherService } from "./weather.service";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  locations = [];

  constructor(private weatherService: WeatherService) {}

  pushZipCodes(zip) {
    this.locations.push(zip.zip);
    this.weatherService.addCurrentConditions(zip.zip);
  }
}
