import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./user-profile.component').then((m) => m.UserProfileComponent),
        children: [
            {
                path: '',
                redirectTo: 'edit-profile',
                pathMatch:'full'
            },
            {
                path: 'edit-profile',
                loadComponent:()=>import('./edit-profile/edit-profile.component').then((m)=>m.EditProfileComponent),
            },
            {
                path: 'change-password',
                loadComponent:()=>import('./change-password/change-password.component').then((m)=>m.ChangePasswordComponent),
            },
            {
                path: 'shopping-cart',
                loadComponent:()=>import('../shopping-cart/shopping-cart.component').then((m)=>m.ShoppingCartComponent)
            },
            {
                path:'wish-list',
                loadComponent:()=>import('../product-wishlist/product-wishlist.component').then((m)=>m.ProductWishlistComponent)
            },
            {
                path:'order-list',
                loadComponent:()=>import('../product-checkout/order-list/order-list.component').then((m)=>m.OrderListComponent)
            }
        ]
    }
];
