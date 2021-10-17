import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exercise } from '../exercise.model';
import { TraningService } from '../traning.service';

@Component({
  selector: 'app-new-traning',
  templateUrl: './new-traning.component.html',
  styleUrls: ['./new-traning.component.css']
})
export class NewTraningComponent implements OnInit, OnDestroy {
  availableExercises : Exercise[];
  subscription : Subscription;

  constructor(private traningService: TraningService) { }

  ngOnInit(): void {
    this.subscription = this.traningService.changeExercises.subscribe((exercises) => {
      this.availableExercises = exercises;
    });
    this.traningService.fetchAvailableExercises();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onTraningStart(form: NgForm) {
    const exerciseId = form.value.exercise;
    this.traningService.startExercise(exerciseId);
  }

}
