import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { ChartModule as ChartModuleG } from 'primeng/chart';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { KnobModule } from 'primeng/knob';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartModuleG,
    RatingModule,
    PaginatorModule,
    TableModule,
    KnobModule
  ]
})
export class ChartModule { }
