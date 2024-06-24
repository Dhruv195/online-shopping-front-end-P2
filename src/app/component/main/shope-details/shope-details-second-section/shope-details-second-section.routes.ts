import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shope-details-second-section.component').then((m) => m.ShopeDetailsSecondSectionComponent),
        children: [
            {
                path: '',
                redirectTo: 'product-description',
                pathMatch:'full'
            },
            {
                path: 'product-description',
                loadComponent:()=>import('./product-description/product-description.component').then((m)=>m.ProductDescriptionComponent),
            },
            {
                path: 'product-information',
                loadComponent:()=>import('./product-information/product-information.component').then((m)=>m.ProductInformationComponent),
            },
            {
                path: 'product-reviews',
                loadComponent:()=>import('./product-reviews/product-reviews.component').then((m)=>m.ProductReviewsComponent),
            }
        ]
    }
]