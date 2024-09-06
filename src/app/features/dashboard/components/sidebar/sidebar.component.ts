import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}
