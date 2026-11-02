import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test('TC10 - Verify Subscription in home page', async ({ page }) => {
  const home = new HomePage(page);

  await home.navigate();
  await home.scrollToFooter();

  await expect(home.subscriptionHeading).toBeVisible();

  await home.subscribe('assinatura.teste@testmail.com');

  await expect(home.subscribeSuccess).toBeVisible();
});
