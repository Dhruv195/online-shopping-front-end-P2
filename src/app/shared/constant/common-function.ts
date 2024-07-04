export const FILTER= [
    
    {
      title: 'FILTER BY COLOR',
      type:'color',
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
      type : 'size',
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

export const PROFILE_ITEMS=[
    {
      title: 'Profile',
      link: '/user-profile/edit-profile',
      icon:'bi bi-person-fill text-primary fs-4'
      
    },
    {
      title: 'Change Password',
      link: '/user-profile/change-password',
      icon:"bi bi-lock-fill fs-4 text-primary"
      
    },
    {
      title: 'Shopping Cart',
      link: '/user-profile/shopping-cart',
      icon:'bi bi-cart-fill fs-4 text-primary'
      
    },
    {
      title: 'Wish List',
      link: '/user-profile/wish-list',
      icon:'bi bi-list-stars fs-4 text-primary'
      
    },
    {
      title: 'Order List',
      link: '/user-profile/order-list',
      icon:'bi bi-card-checklist fs-4 text-primary'
    },
    {
      title: 'Sign Out',
      link:'/home',
      icon:'bi bi-box-arrow-right fs-4 text-primary'

    }
  ]
