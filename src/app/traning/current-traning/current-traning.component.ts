import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TraningService } from '../traning.service';
import { StopTraningComponent } from './stop-traning/stop-traning.component';

@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrls: ['./current-traning.component.css']
})
export class CurrentTraningComponent implements OnInit {

  progress = 0;
  traningTimer: any;

  constructor(private traningService: TraningService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    const exercise = this.traningService.getOngoingExercise();
    const executionTime = (exercise.duration * 1000) /100;
    this.traningTimer = setInterval(() => {
      this.progress = this.progress + 1;

      if(this.progress == 100) {
        clearTimeout(this.traningTimer);
        this.traningService.completeExercise();
      }
    }, executionTime);
  }

  onTraningStop() {
    clearTimeout( this.traningTimer);
    const dialogRef = this.dialog.open(StopTraningComponent, {
      data: {progress: this.progress}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.traningService.cancelExercise(this.progress);
      } else {
        this.startTimer();
      }
    });
  }



}
