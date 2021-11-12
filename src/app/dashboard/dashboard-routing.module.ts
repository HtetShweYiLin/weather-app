import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';''
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';

const routes: Routes = [{
  path: "",
  component: WeatherHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
