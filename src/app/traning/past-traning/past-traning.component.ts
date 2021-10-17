import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise.model';
import { TraningService } from '../traning.service';

@Component({
  selector: 'app-past-traning',
  templateUrl: './past-traning.component.html',
  styleUrls: ['./past-traning.component.css']
})
export class PastTraningComponent implements OnInit, AfterViewInit, OnDestroy  {
  displayedColumns: string[] = ['name', 'calories', 'duration', "status"];
  dataSource = new MatTableDataSource<Exercise>();
  subscription : Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private traningService: TraningService) { }

  ngOnInit(): void {
    this.subscription = this.traningService.finishedExercises.subscribe(exercises => {
      this.dataSource.data = exercises;
    });
    this.traningService.fetchExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
}
