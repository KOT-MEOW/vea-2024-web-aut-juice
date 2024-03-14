import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

 static get addNewAdress() {
  return cy.get('[aria-label="Add a new address"]');
 }
  

}


