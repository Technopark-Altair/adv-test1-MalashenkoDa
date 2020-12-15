import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { cars } from './Cars.component';
import { CarsComponent } from './cars/cars.component';
import {CarComponent} from './car/car.component';
const routes: Routes =[
  {path:"car/:id",component:CarComponent},
  {path: "cars",component:CarsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule]

})
export class AppRoutingModule { }
