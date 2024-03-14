import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }

  static get addNewCard() {
    return cy.get('#mat-expansion-panel-header-0');
  }

  static get nameField() {
    return cy.get('#mat-input-1');
  }

  static get cardField() {
    return cy.get('[#mat-input-2]');
  }
  
  static get expireMonth() {
    return cy.get(`#mat-input-3`);
  }
  static get expireYear() {
    return cy.get(`#mat-input-4`);
  }

  static get submitButton() {
    return cy.get(`#submitButton`);
  }
}
