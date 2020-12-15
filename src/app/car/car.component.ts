import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CarService } from '../car.service';
import { cars } from '../Cars.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']

})
export class CarComponent implements OnInit {
 public id : number;
  public car : cars;
  
  constructor(private carService:CarService,
    private route: ActivatedRoute ) { }
 

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => {
        this.id = +data;
        this.car = this.carService.findCar(this.id);
      });
  }

}
