import { Routes } from '@angular/router';
import { authGuard } from 'src/app/shared/service/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main.component').then((m) => m.MainComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'shop',
        loadComponent: () =>
          import('./shope/shope.component').then((m) => m.ShopeComponent),
      },
      {
        path: 'shop-detail',
        loadComponent: () =>
          import('./shope-details/shope-details.component').then(
            (m) => m.ShopeDetailsComponent
          ),
      },
      {
        path: 'shop-detail/:id',
        loadComponent: () =>
          import('./shope-details/shope-details.component').then((m) => m.ShopeDetailsComponent),
      },
      {
        path: 'order-view/:id',
        loadComponent: () =>
          import('./product-checkout/order-view/order-view.component').then((m) => m.OrderViewComponent),
      },
      {
        path: 'shopping-cart',
        loadComponent: () =>
          import('./shopping-cart/shopping-cart.component').then(
            (m) => m.ShoppingCartComponent
          ),
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./product-checkout/product-checkout.component').then(
            (m) => m.ProductCheckoutComponent
          ),
        canActivate:[authGuard]
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('./user-profile/user-profile.routes').then((m) => m.routes),
        canActivate:[authGuard]
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./contact/contact.component').then((m) => m.ContactComponent),
      },
      {
        path: 'wish-list',
        loadComponent: () =>
          import('./product-wishlist/product-wishlist.component').then(
            (m) => m.ProductWishlistComponent
          ),
        canActivate:[authGuard]
      },
    ],
  },
];
