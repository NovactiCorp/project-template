import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'chart', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
