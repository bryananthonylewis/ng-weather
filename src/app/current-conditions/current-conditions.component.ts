import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-current-conditions",
  templateUrl: "./current-conditions.component.html",
  styleUrls: ["./current-conditions.component.css"]
})
export class CurrentConditionsComponent implements OnInit {
  forcasts = [];

  constructor(private weatherService: WeatherService) {
    this.forcasts = this.weatherService.currentConditions;
  }

  ngOnInit() {}

  removeCurrentConditions(i) {
    this.weatherService.removeCurrentConditions(i);
  }
}
