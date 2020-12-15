import { Injectable } from '@angular/core';
import { cars } from './Cars.component';

@Injectable({
  providedIn: 'root'
})
export class CarService {
cars:Array<cars>=[
{id: 0, brandName:"Audi",modelName:"A5",priceInRub:400000},
{id: 1, brandName:"BMW",modelName:"X5",priceInRub:1000000},
{id: 2, brandName:"Porsche",modelName:"Cayenne",priceInRub:2500000}
];

  constructor() { }
  getCars(){
    return this.cars;
  }

  findCar(id:number) {
    return this.cars.find(car => car.id === id);
}

}
