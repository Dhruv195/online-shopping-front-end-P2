import { Routes } from '@angular/router';
import { authGuard } from '../shared/guard/auth.guard';

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
        path: 'shop-detail/:id',
        loadComponent: () =>
          import('./shope-details/shope-details.component').then((m) => m.ShopeDetailsComponent),
        children: [
          {
            path: '',
            redirectTo: 'product-description',
            pathMatch: 'full'
          },
          {
            path: 'product-description',
            loadComponent: () => import('./shope-details/product-description/product-description.component').then((m) => m.ProductDescriptionComponent),
          },
          {
            path: 'product-information',
            loadComponent: () => import('./shope-details/product-information/product-information.component').then((m) => m.ProductInformationComponent),
          },
          {
            path: 'product-reviews',
            loadComponent: () => import('./shope-details/product-reviews/product-reviews.component').then((m) => m.ProductReviewsComponent),
          }
        ]
       
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
        canActivate: [authGuard],
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('./user-profile/user-profile.routes').then((m) => m.routes),
        canActivate: [authGuard],
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../shared/pages/contact/contact.component').then((m) => m.ContactComponent),
      },
      {
        path: 'wish-list',
        loadComponent: () =>
          import('./product-wishlist/product-wishlist.component').then(
            (m) => m.ProductWishlistComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'wish-list/:id',
        loadComponent: () =>
          import('./product-wishlist/product-wishlist.component').then(
            (m) => m.ProductWishlistComponent
          ),
        canActivate: [authGuard]
      }
    ],
  },
];
