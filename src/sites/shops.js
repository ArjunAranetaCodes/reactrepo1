/**
 * Registry of all shop sites. Add new shops here and create a matching folder under sites/shopX/
 */
import * as shop1 from './shop1/config.js';
import * as shop2 from './shop2/config.js';
import * as shop3 from './shop3/config.js';
import * as shop4 from './shop4/config.js';

const SHOPS = { shop1, shop2, shop3, shop4 };

export const shopSlugs = Object.keys(SHOPS);

export function getShopConfig(siteId) {
  return SHOPS[siteId] || shop1;
}

export function getShopName(siteId) {
  const config = getShopConfig(siteId);
  return config?.name ?? 'Shop';
}
