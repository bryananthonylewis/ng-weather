import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-forecasts-lists",
  templateUrl: "./forecasts-lists.component.html",
  styleUrls: ["./forecasts-lists.component.css"]
})
export class ForecastsListsComponent implements OnInit {
  zip: any;
  weeklyForcast = [];

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.zip = params["zipcode"];
      weatherService.getForecast(this.zip);
      this.weeklyForcast = weatherService.weeklyForcastConditions;
    });
  }

  ngOnInit(): void {}
}
