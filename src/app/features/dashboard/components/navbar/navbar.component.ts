import { Component, computed, ElementRef, inject, ViewChild } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class DashboardNavbarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) { }

  onLogout() {
  }

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [{ icon: 'pi pi-home', route: '/installation' }, { label: 'Components' }, { label: 'Form' }, { label: 'InputText', route: '/inputtext' }];
  }
}
