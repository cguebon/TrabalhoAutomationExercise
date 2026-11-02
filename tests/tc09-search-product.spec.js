import { test, expect } from '@playwright/test';
import { HomePage }     from '../pages/HomePage.js';
import { ProductsPage } from '../pages/ProductsPage.js';

test('TC09 - Search Product', async ({ page }) => {
  const home     = new HomePage(page);
  const products = new ProductsPage(page);

  await home.navigate();
  await home.clickProducts();
  await expect(products.allProductsHeading).toBeVisible();

  await products.searchProduct('Blue Top');

  await expect(products.searchedHeading).toBeVisible();
  await expect(products.searchResults.first()).toBeVisible();
});
