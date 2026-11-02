export class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLoginBtn = page.locator('a[href="/login"]');
    this.productsBtn    = page.locator('a[href="/products"]');
    this.cartBtn        = page.locator('#header a[href="/view_cart"]');
    this.loggedInAs     = page.locator('li a:has-text("Logged in as")');
    this.deleteAccountBtn = page.locator('a[href="/delete_account"]');
    this.logoutBtn      = page.locator('a[href="/logout"]');
    this.footer         = page.locator('#footer');
    this.subscriptionHeading = page.locator('#footer h2:has-text("SUBSCRIPTION")');
    this.subscribeEmail = page.locator('#susbscribe_email');
    this.subscribeBtn   = page.locator('#subscribe');
    this.subscribeSuccess = page.locator('#success-subscribe');
  }

  async navigate() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickSignupLogin() {
    await this.signupLoginBtn.click();
  }

  async clickProducts() {
    await this.productsBtn.click();
  }

  async clickCart() {
    await this.cartBtn.click();
  }

  async clickDeleteAccount() {
    await this.deleteAccountBtn.click();
  }

  async clickLogout() {
    await this.logoutBtn.click();
  }

  async scrollToFooter() {
    await this.footer.scrollIntoViewIfNeeded();
  }

  async subscribe(email) {
    await this.scrollToFooter();
    await this.subscribeEmail.fill(email);
    await this.subscribeBtn.click();
  }
}
