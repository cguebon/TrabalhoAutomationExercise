export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.proceedToCheckoutBtn = page.locator('.btn.btn-default.check_out');
    this.addressDelivery      = page.locator('#address_delivery');
    this.cartInfoSection      = page.locator('#cart_info');
    this.commentTextarea      = page.locator('textarea.form-control');
    this.placeOrderBtn        = page.locator('a.btn.btn-default.check_out');
    this.nameOnCard           = page.locator('input[data-qa="name-on-card"]');
    this.cardNumber           = page.locator('input[data-qa="card-number"]');
    this.cvc                  = page.locator('input[data-qa="cvc"]');
    this.expiryMonth          = page.locator('input[data-qa="expiry-month"]');
    this.expiryYear           = page.locator('input[data-qa="expiry-year"]');
    this.payBtn               = page.locator('button[data-qa="pay-button"]');
    this.orderSuccess         = page.locator('h2.title:has-text("ORDER PLACED!")');
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }

  async placeOrder(comment) {
    await this.commentTextarea.fill(comment);
    await this.placeOrderBtn.click();
  }

  async fillPaymentAndConfirm({ nameOnCard, cardNumber, cvc, expiryMonth, expiryYear }) {
    await this.nameOnCard.fill(nameOnCard);
    await this.cardNumber.fill(cardNumber);
    await this.cvc.fill(cvc);
    await this.expiryMonth.fill(expiryMonth);
    await this.expiryYear.fill(expiryYear);
    await this.payBtn.click();
  }
}
