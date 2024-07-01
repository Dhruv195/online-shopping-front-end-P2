import { Routes } from '@angular/router';

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
        path: 'shop/:id',
        loadComponent: () =>
          import('./shope/shope.component').then((m) => m.ShopeComponent),
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
        //auth-guard
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('./user-profile/user-profile.routes').then((m) => m.routes),
        //auth-guard
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
      },
    ],
  },
];
