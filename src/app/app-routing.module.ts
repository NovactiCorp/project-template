import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo:'/dashboard/sales/chart',
      pathMatch: 'full'
    },
    {
      path: 'auth',
      loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
