import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-traning',
  templateUrl: './stop-traning.component.html',
  styleUrls: ['./stop-traning.component.css']
})
export class StopTraningComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }
}
