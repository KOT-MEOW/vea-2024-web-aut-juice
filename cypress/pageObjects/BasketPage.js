import { BasePage } from "../pageObjects/basePage";

export class BasketPage extends BasePage {
  static get url() {
    return "/#/basket";
  }

  static get checkOutButton() {
    return cy.get("#checkoutButton");
  }

  static get continueButton() {
    return cy.get('[aria-label="Proceed to payment selection"]');
  }

}
