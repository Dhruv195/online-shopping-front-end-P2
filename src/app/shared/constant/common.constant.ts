
export const FILTER = [
  {
    title: 'FILTER BY COLOR',
    type: 'color',
    color: [
      {
        title: 'All Color',
        total: '1000',
      },
      {
        title: 'Black',
        total: '150',
      },
      {
        title: 'White',
        total: '290',
      },
      {
        title: 'Red',
        total: '234',
      },
      {
        title: 'Blue',
        total: '300',
      },
      {
        title: 'Green',
        total: '230',
      },
    ],
  },

  {
    title: 'FILTER BY SIZE',
    type: 'size',
    size: [
      {
        title: 'All Size',
        total: '1000',
      },
      {
        title: 'XS',
        total: '150',
      },
      {
        title: 'S',
        total: '290',
      },
      {
        title: 'M',
        total: '234',
      },
      {
        title: 'L',
        total: '300',
      },
      {
        title: 'XL',
        total: '230',
      },
    ],
  },
];

export const PROFILE_ITEMS = [
  {
    title: 'Profile',
    link: '/user-profile/edit-profile',
    icon: 'bi bi-person-fill text-primary fs-4',
  },
  {
    title: 'Change Password',
    link: '/user-profile/change-password',
    icon: 'bi bi-lock-fill fs-4 text-primary',
  },
  {
    title: 'Shopping Cart',
    link: '/user-profile/shopping-cart',
    icon: 'bi bi-cart-fill fs-4 text-primary',
  },
  {
    title: 'Wish List',
    link: '/user-profile/wish-list',
    icon: 'bi bi-list-stars fs-4 text-primary',
  },
  {
    title: 'Order List',
    link: '/user-profile/order-list',
    icon: 'bi bi-card-checklist fs-4 text-primary',
  },
  {
    title: 'Sign Out',
    link: '/home',
    icon: 'bi bi-box-arrow-right fs-4 text-primary',
  },
];

export const FEATURE_ITEMS = [
  {
    icon: 'fa-check',
    title: 'Quality Product',
  },
  {
    icon: 'fa-shipping-fast',
    title: 'Free Shipping',
  },
  {
    icon: 'fa-exchange-alt',
    title: '14-Day Return',
  },
  {
    icon: 'fa-phone-volume',
    title: '24/7 Support',
  },
];



export const shareList = [
  {
    icon: 'fa-facebook-f',
    link: 'https://www.facebook.com/',
  },
  {
    icon: ' fa-twitter',
    link: 'https://x.com/?lang=en',
  },
  {
    icon: 'fa-linkedin-in',
    link: 'https://in.linkedin.com/',
  },
  {
    icon: 'fa-pinterest',
    link: 'https://in.pinterest.com/',
  },
];

export const FOOTER_NAVIGATION = [
  {
    navigationLabel: 'QUICK SHOP',
    navigationLinks: [
      {
        label: 'Home',
        link: '/home',
      },
      {
        label: 'Our Shop',
        link: '/shop',
      },
      {
        label: 'Shopping Cart',
        link: '/shopping-cart',
      },
      {
        label: 'Checkout',
        link: '/checkout',
      },
      {
        label: 'Contact Us',
        link: '/contact',
      },
    ],
  },
  {
    navigationLabel: 'My Account',
    navigationLinks: [
      {
        label: 'Home',
        link: '/home',
      },
      {
        label: 'Our Shop',
        link: '/shop',
      },
      {
        label: 'Shopping Cart',
        link: '/shopping-cart',
      },
      {
        label: 'Checkout',
        link: '/checkout',
      },
      {
        label: 'Contact Us',
        link: '/contact',
      },
    ],
  },
];


export const HEADER_ROUTES_ITEM=[
  {
    title: 'Home',
    link: '/home',
  },
  {
    title: 'Shop',
    link: '/shop',
  },
  {
    title: 'Contact',
    link:'/contact'
  }
];

export const PROFILE_ROUTES_ITEM=[
  {
    title: 'Edit Profile',
    link: '/user-profile',
    icon: 'bi bi-person-fill text-primary fs-4',
  },
  {
    title: 'Change Password',
    link: '/user-profile/change-password',
    icon: 'bi bi-lock-fill fs-4 text-primary',
  },
  {
    title: 'Cart Item',
    link: '/user-profile/shopping-cart',
    icon: 'bi bi-cart-fill fs-4 text-primary',
  },
  {
    title: 'Wish List',
    link: '/user-profile/wish-list',
    icon: 'bi bi-list-stars fs-4 text-primary',
  },
  {
    title: 'Sign Out',
    link: '/home',
    icon: 'bi bi-box-arrow-right fs-4 text-primary',
  },
];

export const TOAST_TYPE = {
  success:'success',
  warning: 'warning',
  danger:'danger'
}

export const PAYMENT_METHOD=['Paytm', 'Google Pay', 'Paypal'];

export const COUNTRIES= ['USA', 'Canada', 'UK'];

export const PAGE_SIZE_SHOP_LIST=[10,20,30]

export  const FIRST_SELECTED_PRODUCT_INFO={
  productId: 0,
  quantity: 1,
  price: 0,
  size: '',
  color: '',
};
    