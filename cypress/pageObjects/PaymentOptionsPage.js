import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static get selectAcard() {
    return cy.get('[class="mat-radio-button mat-accent"]');
  }

  static get continueButton() {
    return cy.get('[aria-label="Proceed to review"]');
  }

}
