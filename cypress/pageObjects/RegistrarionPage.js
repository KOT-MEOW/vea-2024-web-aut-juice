import { BasePage } from "../pageObjects/basePage";

export class RegistrationPage extends BasePage {
    static get url() {
      return "/#/login";
    }

    static get notAcostumer() {
        return cy.get("#newCustomerLink")
    }

}
 