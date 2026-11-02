import { test, expect } from '@playwright/test';
import { HomePage }  from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { generateUser } from '../helpers/userData.js';
import { registerUser, deleteAccount } from '../helpers/actions.js';

test('TC02 - Login User with correct email and password', async ({ page }) => {
  const user = generateUser();
  const home  = new HomePage(page);
  const login = new LoginPage(page);

  await registerUser(page, user);
  await home.clickLogout();

  await home.clickSignupLogin();
  await expect(login.loginHeading).toBeVisible();

  await login.login(user.email, user.password);
  await expect(home.loggedInAs).toBeVisible();

  await deleteAccount(page);
});
