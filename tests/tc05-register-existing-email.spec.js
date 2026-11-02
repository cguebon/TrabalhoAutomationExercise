import { test, expect } from '@playwright/test';
import { HomePage }   from '../pages/HomePage.js';
import { LoginPage }  from '../pages/LoginPage.js';
import { generateUser } from '../helpers/userData.js';
import { registerUser, deleteAccount } from '../helpers/actions.js';

test('TC05 - Register User with existing email', async ({ page }) => {
  const user = generateUser();
  const home  = new HomePage(page);
  const login = new LoginPage(page);

  await registerUser(page, user);
  await home.clickLogout();

  await home.clickSignupLogin();
  await expect(login.signupHeading).toBeVisible();

  await login.startSignup(user.name, user.email);
  await expect(login.signupError).toBeVisible();

  await home.clickSignupLogin();
  await login.login(user.email, user.password);
  await deleteAccount(page);
});
