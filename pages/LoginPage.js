export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginHeading   = page.locator('h2:has-text("Login to your account")');
    this.signupHeading  = page.locator('h2:has-text("New User Signup!")');
    this.loginEmail     = page.locator('input[data-qa="login-email"]');
    this.loginPassword  = page.locator('input[data-qa="login-password"]');
    this.loginBtn       = page.locator('button[data-qa="login-button"]');
    this.loginError     = page.locator('p:has-text("Your email or password is incorrect!")');
    this.signupName     = page.locator('input[data-qa="signup-name"]');
    this.signupEmail    = page.locator('input[data-qa="signup-email"]');
    this.signupBtn      = page.locator('button[data-qa="signup-button"]');
    this.signupError    = page.locator('p:has-text("Email Address already exist!")');
  }

  async login(email, password) {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginBtn.click();
  }

  async startSignup(name, email) {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupBtn.click();
  }
}
