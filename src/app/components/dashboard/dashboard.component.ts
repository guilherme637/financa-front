import { Component } from '@angular/core';
import {ContaModalComponent} from "../conta-modal/conta-modal.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ContaModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
