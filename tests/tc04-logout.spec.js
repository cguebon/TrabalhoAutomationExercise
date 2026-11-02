import { test, expect } from '@playwright/test';
import { HomePage }  from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { generateUser } from '../helpers/userData.js';
import { registerUser } from '../helpers/actions.js';

test('TC04 - Logout User', async ({ page }) => {
  const user = generateUser();
  const home  = new HomePage(page);
  const login = new LoginPage(page);

  await registerUser(page, user);
  await expect(home.loggedInAs).toBeVisible();

  await home.clickLogout();
  await expect(login.loginHeading).toBeVisible();
});
