import { environment } from 'src/environments/environment.development';

export const API = {
  SIGN_UP: 'user/registration',
  SIGN_IN: 'user/login',
  USER_GET: 'user',
  USER_UPDATE: 'user/update',
  USER_CART: 'cart',
  USER_NAME_PROFILE_IMG:
    environment.urlProfileUrl + '/api/&background=FFD333?name=',
  CATEGORY_LIST: 'category/list',
  PRODUCT_LIST: 'product/list',
  PRODUCT_BY_ID: 'product/',
  ADD_TO_CART: 'cart/',
  GET_USER_CART: 'cart',
  DELETE_USER_CART: 'cart/',
  GET_RELATED_PRODUCTS: 'product/related/',
  ORDER_CHECKOUT: 'order/checkout',
  GET_ORDER_LIST: 'order/list',
  ENQUIRY: 'enquiry',
  GET_ORDER_BY_ID: 'order/',
  CHANGE_PASSWORD: 'user/changePassword',
  FORGOT_PASSWORD: 'user/forget-password/',
  CONFIRM_EMAIL:'user/confirm-email',
  WISHLIST:'wishlist',
  REVIEW: 'review',
  REVIEW_LIST:'review/list',
  SITE_CONFIG: 'siteConfigs',
  LANGUAGE: 'language',
  COLOR: 'product/color',
  GET_SPECIAL_OFFER: 'specialOffer',
  GET_COUPON_DETAILS: 'coupon/',
  REMOVE_ORDER:'order/cancel'
};
