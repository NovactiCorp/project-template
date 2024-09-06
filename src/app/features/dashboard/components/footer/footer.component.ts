import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'dashboard-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class DashboardFooterComponent {
  constructor(public layoutService: LayoutService) { }
}
