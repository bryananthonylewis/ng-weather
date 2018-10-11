import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ForecastsListsComponent } from "./forecasts-lists/forecasts-lists.component";

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'forecast/:zipcode', component: ForecastsListsComponent
  }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
