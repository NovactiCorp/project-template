import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: DashboardLayoutComponent,
      children: [
        { path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
