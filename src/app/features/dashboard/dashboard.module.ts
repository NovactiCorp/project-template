import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './components/layout/layout.component';
import { DashboardNavbarComponent } from './components/navbar/navbar.component';
import { DashboardFooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ConfigModule } from './components/config/config.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardFooterComponent,
    DashboardNavbarComponent,
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    ConfigModule,
    BreadcrumbModule
  ]
})
export class DashboardModule { }
