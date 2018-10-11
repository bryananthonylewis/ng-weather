import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { ZipcodeEntryComponent } from "./zipcode-entry/zipcode-entry.component";
import { CurrentConditionsComponent } from "./current-conditions/current-conditions.component";
import { HomeComponent } from "./home/home.component";
import { ForecastsListsComponent } from "./forecasts-lists/forecasts-lists.component";

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent,
    HomeComponent,
    ForecastsListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
