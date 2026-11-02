import { test, expect } from '@playwright/test';
import { HomePage }      from '../pages/HomePage.js';
import { ProductsPage }  from '../pages/ProductsPage.js';
import { CheckoutPage }  from '../pages/CheckoutPage.js';
import { generateUser, paymentData } from '../helpers/userData.js';
import { registerUser, deleteAccount } from '../helpers/actions.js';

test('TC15 - Place Order: Register before Checkout', async ({ page }) => {
  const user     = generateUser();
  const home     = new HomePage(page);
  const products = new ProductsPage(page);
  const checkout = new CheckoutPage(page);

  await registerUser(page, user);
  await expect(home.loggedInAs).toBeVisible();

  await home.clickProducts();
  await products.addFirstProductToCart();

  await home.clickCart();
  await expect(page).toHaveURL(/view_cart/);

  await checkout.proceedToCheckout();

  await expect(checkout.addressDelivery).toBeVisible();
  await expect(checkout.cartInfoSection).toBeVisible();

  await checkout.placeOrder('Teste de pedido automatizado TC15');

  await checkout.fillPaymentAndConfirm(paymentData);
  await expect(checkout.orderSuccess).toBeVisible();

  await deleteAccount(page);
});
