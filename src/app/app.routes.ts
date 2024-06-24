import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch:'full'
    },
    {
        path: 'main',
        loadChildren: ()=> import('./component/main/main.routes').then((m)=>m.routes)
    },
    {
        path: 'auth',
        loadChildren:()=>import('./component/auth/auth.routes').then((m)=>m.routes)
    },
    {
        path: "**",
        redirectTo: 'error',
        pathMatch:'full'
    },
    {
        path: 'error',
        loadComponent:()=>import('./shared/common/error/error.component').then((m)=>m.ErrorComponent)
    }
];
