import {
  index,
  layout,
  route,
  type RouteConfig,
} from '@react-router/dev/routes'
/** 
 * 🐨 As we've learned in the previous exercise this file is used to define your routes,
 * but wouldn't it be neat if we didn't have to manually define every new route?
 *
 * 🐨 Well, that is the point of this exercise! We will add a plugin from react-router that
 * automatically picks up new routes and doesn't require us to hardcode them in this file. 
 *
 *  💰 First install the dev dependency into package.json called @react-router/fs-routes
 */
export default [
  layout('./routes/_landing.tsx', [
    index('./routes/_landing._index/route.tsx'),
    route('terms-of-use', './routes/_landing.terms-of-use.tsx'),
    route('terms-of-service', './routes/_landing.terms-of-service.tsx'),
    route('products', './routes/_landing.products.tsx'),
    route('products/:productId', './routes/_landing.products.$productId.tsx'),
    route('contact', './routes/_landing.contact.tsx'),
    route('about', './routes/_landing.about.tsx'),
    route('cart', './routes/_landing.cart.tsx'),
  ]),
] satisfies RouteConfig