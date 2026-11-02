import { test, expect } from '@playwright/test';
import { HomePage }   from '../pages/HomePage.js';
import { LoginPage }  from '../pages/LoginPage.js';
import { SignupPage } from '../pages/SignupPage.js';
import { generateUser } from '../helpers/userData.js';
import { deleteAccount } from '../helpers/actions.js';

test('TC01 - Register User', async ({ page }) => {
  const user   = generateUser();
  const home   = new HomePage(page);
  const login  = new LoginPage(page);
  const signup = new SignupPage(page);

  await home.navigate();
  await expect(page).toHaveURL('/');

  await home.clickSignupLogin();
  await expect(login.signupHeading).toBeVisible();

  await login.startSignup(user.name, user.email);
  await expect(signup.accountInfoHeading).toBeVisible();

  await signup.fillAccountInfo(user);
  await signup.fillAddressInfo(user);
  await signup.clickCreateAccount();
  await expect(signup.accountCreated).toBeVisible();

  await signup.clickContinue();
  await expect(home.loggedInAs).toBeVisible();

  await deleteAccount(page);
});
