import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:()=> import('./shope-details.component').then((m) => m.ShopeDetailsComponent)
    }
]