import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { cars } from '../Cars.component';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarService]
})
export class CarsComponent implements OnInit {
  public id : number;
  public car : cars;
  
  constructor(private carService:CarService,
    private route: ActivatedRoute ) { }
 
cars  :Array<cars>;
  ngOnInit(): void {
  
    this.cars=this.carService.getCars()
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => {
        this.id = +data;
        this.car = this.carService.findCar(this.id);
      });
  }

}
