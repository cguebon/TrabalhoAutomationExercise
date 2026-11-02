import { test, expect } from '@playwright/test';
import { HomePage }  from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';

test('TC03 - Login User with incorrect email and password', async ({ page }) => {
  const home  = new HomePage(page);
  const login = new LoginPage(page);

  await home.navigate();
  await home.clickSignupLogin();
  await expect(login.loginHeading).toBeVisible();

  await login.login('usuario.invalido@testmail.com', 'senhaErrada123');
  await expect(login.loginError).toBeVisible();
});
