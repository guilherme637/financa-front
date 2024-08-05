import { Component } from '@angular/core';
import {ContaModalComponent} from "../conta-modal/conta-modal.component";
import {ModalErroComponent} from "../modal-erro/modal-erro.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ContaModalComponent, ModalErroComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
