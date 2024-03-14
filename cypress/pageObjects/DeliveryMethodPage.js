import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static get chooseDelivery() {
    return cy.get("mat-row.mat-row");
  }

 static get continueButton() {
    return cy.get('[aria-label="Proceed to delivery method selection"]');
 }

}
