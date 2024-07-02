import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ContaModalComponent} from "./components/conta-modal/conta-modal.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
