import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

const COMMON_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const MAT_MODULES = [
  MatIconModule,

  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatCardModule,
  MatDialogModule,
];

@NgModule({
  imports: [...COMMON_MODULES, MAT_MODULES],
  exports: [...COMMON_MODULES, MAT_MODULES],
})
export class AppSharedModule {}
