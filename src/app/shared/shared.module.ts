import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BasicDirective } from './basic.directive';
import { BestHighDirective } from './best-high.directive';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LoadingSpinnerComponent, BasicDirective, BestHighDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  exports: [
    LoadingSpinnerComponent,
    BasicDirective,
    BestHighDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
})
export class SharedModule {}
