import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { SignupPage } from '../pages/SignupPage.js';
import { expect } from '@playwright/test';

export async function registerUser(page, user) {
  const home   = new HomePage(page);
  const login  = new LoginPage(page);
  const signup = new SignupPage(page);

  await home.navigate();
  await home.clickSignupLogin();
  await expect(login.signupHeading).toBeVisible();
  await login.startSignup(user.name, user.email);
  await expect(signup.accountInfoHeading).toBeVisible();
  await signup.fillAccountInfo(user);
  await signup.fillAddressInfo(user);
  await signup.clickCreateAccount();
  await expect(signup.accountCreated).toBeVisible();
  await signup.clickContinue();
}

export async function loginUser(page, email, password) {
  const home  = new HomePage(page);
  const login = new LoginPage(page);

  await home.navigate();
  await home.clickSignupLogin();
  await expect(login.loginHeading).toBeVisible();
  await login.login(email, password);
}

export async function deleteAccount(page) {
  const home = new HomePage(page);
  await home.clickDeleteAccount();
  await expect(page.locator('h2[data-qa="account-deleted"]')).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();
}
