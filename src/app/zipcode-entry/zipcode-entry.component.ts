import { LocationService } from "./../location.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zipcode-entry",
  templateUrl: "./zipcode-entry.component.html",
  styleUrls: ["./zipcode-entry.component.css"]
})
export class ZipcodeEntryComponent implements OnInit {
  constructor(private locationService: LocationService) {}

  ngOnInit() {}

  logForm(value) {
    this.locationService.pushZipCodes(value);
  }
}
