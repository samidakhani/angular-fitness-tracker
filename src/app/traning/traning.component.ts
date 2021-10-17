import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TraningService } from './traning.service';

@Component({
  selector: 'app-traning',
  templateUrl: './traning.component.html',
  styleUrls: ['./traning.component.css']
})
export class TraningComponent implements OnInit, OnDestroy  {
  subscription : Subscription;
  ongoingTraning: boolean;

  constructor(private traningService: TraningService) { }

  ngOnInit(): void {
    this.subscription = this.traningService.changeExercise
    .subscribe((excerise)=>{
      if(excerise) {
        this.ongoingTraning = true;
      } else {
        this.ongoingTraning = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
