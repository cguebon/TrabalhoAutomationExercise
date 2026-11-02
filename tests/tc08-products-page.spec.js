import { test, expect } from '@playwright/test';
import { HomePage }     from '../pages/HomePage.js';
import { ProductsPage } from '../pages/ProductsPage.js';

test('TC08 - Verify All Products and product detail page', async ({ page }) => {
  const home     = new HomePage(page);
  const products = new ProductsPage(page);

  await home.navigate();
  await home.clickProducts();

  await expect(products.allProductsHeading).toBeVisible();
  await expect(products.productsList).toBeVisible();

  await products.clickViewFirstProduct();

  await expect(products.productName).toBeVisible();
  await expect(products.productCategory).toBeVisible();
  await expect(products.productPrice).toBeVisible();
  await expect(products.productAvailability).toBeVisible();
  await expect(products.productCondition).toBeVisible();
  await expect(products.productBrand).toBeVisible();
});
