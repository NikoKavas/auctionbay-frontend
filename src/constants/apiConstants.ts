export const apiRoutes = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/register',
  SIGNOUT: '/auth/signout',
  FETCH_USER: '/auth/me',
  UPLOAD_AVATAR_IMAGE: '/users/upload',
  UPLOAD_PRODUCT_IMAGE: '/products/upload',
  GET_AVATAR_IMAGE: '/users/get/image',
  PRODUCTS_PREFIX: '/products',
  ROLES_PREFIX: '/roles',
  ORDERS_PREFIX: '/orders',
  PERMISSIONS_PREFIX: '/permissions',
} as const;
