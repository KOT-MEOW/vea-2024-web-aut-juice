import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
  static get url() {
    return "/#/order-completion/";
  }

 static get confimation(){
    return cy.get('[class="mat-card mat-focus-indicator mat-elevation-z0"]');
 }
  

}
