export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.allProductsHeading    = page.locator('.title:has-text("ALL PRODUCTS")');
    this.productsList          = page.locator('.features_items');
    this.firstViewProductLink  = page.locator('.choose a[href*="/product_details/"]').first();
    this.productName           = page.locator('.product-information h2');
    this.productCategory       = page.locator('.product-information p:has-text("Category")');
    this.productPrice          = page.locator('.product-information span span');
    this.productAvailability   = page.locator('.product-information p:has-text("Availability")');
    this.productCondition      = page.locator('.product-information p:has-text("Condition")');
    this.productBrand          = page.locator('.product-information p:has-text("Brand")');
    this.searchInput           = page.locator('#search_product');
    this.searchBtn             = page.locator('#submit_search');
    this.searchedHeading       = page.locator('.title:has-text("SEARCHED PRODUCTS")');
    this.searchResults         = page.locator('.features_items .productinfo');
  }

  async clickViewFirstProduct() {
    await this.firstViewProductLink.click();
  }

  async searchProduct(name) {
    await this.searchInput.fill(name);
    await this.searchBtn.click();
  }

  async addFirstProductToCart() {
    const firstProduct = this.page.locator('.features_items .productinfo').first();
    await firstProduct.hover();
    await this.page.locator('.features_items .product-overlay .add-to-cart').first().click();
    await this.page.locator('button:has-text("Continue Shopping")').click();
  }
}
