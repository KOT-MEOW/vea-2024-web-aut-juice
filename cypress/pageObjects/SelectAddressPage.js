import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }

  static get selectAddress() {
    return cy.get('[class="mat-cell cdk-cell cdk-column-Country mat-column-Country ng-star-inserted"]');
  }

}
