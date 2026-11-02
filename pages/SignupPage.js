export class SignupPage {
  constructor(page) {
    this.page = page;
    this.accountInfoHeading = page.locator('b:has-text("Enter Account Information")');
    this.titleMr            = page.locator('#id_gender1');
    this.passwordInput      = page.locator('input[data-qa="password"]');
    this.daySelect          = page.locator('select[data-qa="days"]');
    this.monthSelect        = page.locator('select[data-qa="months"]');
    this.yearSelect         = page.locator('select[data-qa="years"]');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.optinCheckbox      = page.locator('#optin');
    this.firstNameInput     = page.locator('input[data-qa="first_name"]');
    this.lastNameInput      = page.locator('input[data-qa="last_name"]');
    this.companyInput       = page.locator('input[data-qa="company"]');
    this.addressInput       = page.locator('input[data-qa="address"]');
    this.countrySelect      = page.locator('select[data-qa="country"]');
    this.stateInput         = page.locator('input[data-qa="state"]');
    this.cityInput          = page.locator('input[data-qa="city"]');
    this.zipcodeInput       = page.locator('input[data-qa="zipcode"]');
    this.mobileInput        = page.locator('input[data-qa="mobile_number"]');
    this.createAccountBtn   = page.locator('button[data-qa="create-account"]');
    this.accountCreated     = page.locator('h2[data-qa="account-created"]');
    this.continueBtn        = page.locator('a[data-qa="continue-button"]');
  }

  async fillAccountInfo({ password, day, month, year }) {
    await this.titleMr.check();
    await this.passwordInput.fill(password);
    await this.daySelect.selectOption(day);
    await this.monthSelect.selectOption(month);
    await this.yearSelect.selectOption(year);
    await this.newsletterCheckbox.check();
    await this.optinCheckbox.check();
  }

  async fillAddressInfo({ firstName, lastName, company, address, country, state, city, zipcode, mobile }) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.companyInput.fill(company);
    await this.addressInput.fill(address);
    await this.countrySelect.selectOption(country);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.zipcodeInput.fill(zipcode);
    await this.mobileInput.fill(mobile);
  }

  async clickCreateAccount() {
    await this.createAccountBtn.click();
  }

  async clickContinue() {
    await this.continueBtn.click();
  }
}
