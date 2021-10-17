import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatButtonModule,MatIconModule, MatToolbarModule, MatTabsModule, MatCardModule,
    MatProgressSpinnerModule, MatListModule, MatSelectModule, MatDialogModule,
    MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule],
  exports: [MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatButtonModule,MatIconModule, MatToolbarModule, MatTabsModule, MatCardModule,
    MatProgressSpinnerModule, MatListModule, MatSelectModule, MatDialogModule,
    MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule],
  providers: [],
})
export class MaterialModule {}
